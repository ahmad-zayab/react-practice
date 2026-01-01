import { useState } from "react";
import './ListGroup.css';
interface Props {
    items: string[];
    heading : string;
}  
const ListGroup = ({items, heading}: Props) => {


  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    if (items.length === 0) {
      return <p>No item found</p>;
    }
  };

  return (
    <>
      {getMessage()}
      <ul className="list-group">
        <h1>{heading}</h1>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              console.log(item, index, "Clicked");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
