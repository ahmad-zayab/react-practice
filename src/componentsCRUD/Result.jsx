import { useState } from "react";
const Result = ({ items , onDelete, onUpdate}) => {
   // const [itemsState, setItems] = useState(items);
const deleteItemByValue = (itemToDelete) => {
    console.log("Deleting item:", itemToDelete);
    console.log("Current items before deletion:", items);
    let updatedItems = items.filter((item,index) => index !== itemToDelete);
    items=updatedItems;
  console.log("Updated items:", updatedItems);
};
return ( 
<>
  <h1>Result Component</h1>
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      { items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button className="btn btn-outline-secondary" onClick={() => onUpdate(index)}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={() => onDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
    </tbody>
  </table>
</>
);
};
export default Result;