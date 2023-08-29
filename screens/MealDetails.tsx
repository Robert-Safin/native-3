import { useNavigation, useRoute } from "@react-navigation/native";
import { FC, useLayoutEffect } from "react";
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
import { ScreenNames } from "../App";
import { MEALS } from "../data/data";
import { Ionicons } from "@expo/vector-icons";

const MealDetails: FC = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  const { mealId } = route.params as ScreenNames["MealDetails"];

  const mealToDisplay = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable>
            <Ionicons name="star" size={24} color={"white"} />
          </Pressable>
        );
      },
    });
  }, [mealId]);

  return (
    <ScrollView style={{ flex: 1, marginBottom: 24 }}>
      <Image
        source={{ uri: mealToDisplay!.imageUrl }}
        style={{
          width: "100%",
          height: 350,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          margin: 8,
          color: "white",
        }}
      >
        {mealToDisplay!.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 8,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            margin: 8,
            color: "white",
          }}
        >
          {mealToDisplay!.duration}m
        </Text>
        <Text
          style={{
            fontSize: 12,
            margin: 8,
            color: "white",
          }}
        >
          {mealToDisplay!.complexity.toUpperCase()}
        </Text>
        <Text
          style={{
            fontSize: 12,
            margin: 8,
            color: "white",
          }}
        >
          {mealToDisplay!.affordability.toUpperCase()}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          margin: 8,
          color: "white",
        }}
      >
        Ingredients
      </Text>
      {mealToDisplay!.ingredients.map((ingredient) => (
        <Text
          style={{
            margin: 8,
            color: "white",
          }}
          key={ingredient}
        >
          {ingredient}
        </Text>
      ))}
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          margin: 8,
          color: "white",
        }}
      >
        Steps
      </Text>
      {mealToDisplay!.steps.map((step) => (
        <Text
          style={{
            margin: 8,
            color: "white",
          }}
          key={step}
        >
          {step}
        </Text>
      ))}
    </ScrollView>
  );
};

export default MealDetails;
