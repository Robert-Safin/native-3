import { FC } from "react";
import Meal from "../models/meal";
import { Image, Platform, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../App";

interface Props {
  meal: Meal;
}

const MealItem: FC<Props> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenNames, "MealDetails">>();

  return (
    <View
      style={{
        margin: 16,
        borderRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "#ccc",
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 8,
      }}
    >
      <Pressable
        android_ripple={{ color: "gray" }}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={() => {
          navigation.navigate("MealDetails", {
            mealId: props.meal.id,
          });
        }}
      >
        <View>
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: props.meal.imageUrl }}
              style={{
                width: "100%",
                height: 200,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                padding: 8,
              }}
            >
              {props.meal.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: 8,
              }}
            >
              <Text>{props.meal.duration}m</Text>
              <Text>{props.meal.complexity.toUpperCase()}</Text>
              <Text>{props.meal.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
