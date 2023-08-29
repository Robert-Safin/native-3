import { FlatList, Text, View } from "react-native";
import { FC, useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../App";
import { CATEGORIES, MEALS } from "../data/data";
import MealItem from "../components/MealItem";

const MealOverview: FC = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  const { categoryId } = route.params as ScreenNames["MealsOverview"];


  useLayoutEffect(()=> {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId)?.title,
    })
  },[categoryId, navigation])


  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <MealItem meal={itemData.item} />;
        }}
      />
    </View>
  );
};

export default MealOverview;
