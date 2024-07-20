const Item = (props) => {
  let {food} = props;
  return <li className="list-group-item">{food}</li>; 
};
export default Item;