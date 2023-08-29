import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import { FC } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../App";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen: FC = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenNames, "MealsCategories">>();

  const navigateToMealOverview = (itemId: string) => {
    navigation.navigate("MealsOverview", {
      categoryId: itemId,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile
          category={item}
          navigateToMealOverview={navigateToMealOverview}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
