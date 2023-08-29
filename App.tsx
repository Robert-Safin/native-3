import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverview from "./screens/MealOverview";
import { CATEGORIES } from "./data/data";

const Stack = createNativeStackNavigator<ScreenNames>();

export type ScreenNames = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
  };
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              contentStyle: {
                backgroundColor: "#48251b",
              },
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
