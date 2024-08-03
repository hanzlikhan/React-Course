import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const ItemList = ({  }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

