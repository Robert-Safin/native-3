import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverview from "./screens/MealOverview";
import MealDetails from "./screens/MealDetails";
import { Text } from "react-native";

const Stack = createNativeStackNavigator<ScreenNames>();

export type ScreenNames = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
  };
  MealDetails: {
    mealId: string;
  };
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            contentStyle: {
              backgroundColor: "#48251b",
            },
          }}
        >
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
          <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
