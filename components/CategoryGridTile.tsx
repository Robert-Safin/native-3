import { FC } from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import Category from "../models/category";

interface Props {
  category: Category;
  navigateToMealOverview: (itemId: string) => void;
}

const CategoryGridTile: FC<Props> = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => props.navigateToMealOverview(props.category.id)}
      >
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: props.category.color },
          ]}
        >
          <Text style={styles.title}>{props.category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
