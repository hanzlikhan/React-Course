import Item from "./Item";

const FoodItem = ()=>{
  const foodItems = ["Dal", "Rice", "Vegetables", "Fruits"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        // <li className="list-group-item" key={index}>
        //   {item}
        // </li>
        <Item key={item} food={item}></Item>
      ))}
    </ul>
  );
}
export default FoodItem;