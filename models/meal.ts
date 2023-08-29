
type Complexity = 'simple' | 'medium' | 'hard';  // Just an example, adjust based on your needs
type Affordability = 'cheap' | 'pricy' | 'luxurious';  // Adjust based on your needs

class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: Affordability;
  complexity: Complexity;
  imageUrl: string;
  duration: number;  // Assuming it's a number of minutes/hours
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: Affordability,
    complexity: Complexity,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;










// class Meal {
//   constructor(
//     id,
//     categoryIds,
//     title,
//     affordability,
//     complexity,
//     imageUrl,
//     duration,
//     ingredients,
//     steps,
//     isGlutenFree,
//     isVegan,
//     isVegetarian,
//     isLactoseFree
//   ) {
//     this.id = id;
//     this.categoryIds = categoryIds;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.ingredients = ingredients;
//     this.steps = steps;
//     this.duration = duration;
//     this.complexity = complexity;
//     this.affordability = affordability;
//     this.isGlutenFree = isGlutenFree;
//     this.isVegan = isVegan;
//     this.isVegetarian = isVegetarian;
//     this.isLactoseFree = isLactoseFree;
//   }
// }

// export default Meal;
