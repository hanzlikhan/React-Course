import React from "react";
import FoodItem from "./component/FoodItem";
import ErrorMsg from "./component/ErrorMsg";
// Assuming you have an array of food items
const foodItems = ["Dal", "Rice", "Vegetables", "Fruits"];

function App() {
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMsg items ={foodItems}></ErrorMsg>
      <FoodItem></FoodItem>
    </>
  );
}

export default App;
