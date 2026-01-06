import { useState } from "react";
import "./Create.css";
import Result from "../componentsCRUD/Result";
import record from "./record.json";
import fs from 'fs';
const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
const [editIndex, setEditIndex] = useState(null);

  let [data, setData] = useState([...record]);

  const handleSubmit = (e) => {
  e.preventDefault();
console.log("editIndex:", editIndex);
  if (!name || !age) return;

  if (editIndex !== null) {
    const updatedData = data.map((item, index) =>
      index === editIndex ? { name, age, address } : item
    );
    setData(updatedData);
    setEditIndex(null);
  } else {
    setData([...data, { name, age,address }]);
  }

  setName("");
  setAge("");
  setAddress("");
  // saveData(data);
};

  const deleteItem = (indexToDelete) => {
  setData(data.filter((_, index) => index !== indexToDelete));
};

const handleUpdate = (index) => {
  setName(data[index].name);
  setAge(data[index].age);
  setAddress(data[index].address);
  setEditIndex(index);
};
// const saveData=(data)=>{
//   const jsonData=JSON.stringify(data);
//   console.log("Saving data:",jsonData);
//  fs.writeFile('./src/componentsCRUD/record.json',jsonData,(err)=>{
//     if(err){
//       console.log("Error writing file",err);
//     }else{
//       console.log("Successfully wrote file");
//     }
//   });
// }

  return (
    <div className="Create">
      {editIndex !== null ? <h2>Edit Item</h2> : <h2>Create New Item</h2>}

      <form onSubmit={handleSubmit}>
        <p>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>

        <p>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>

        <p>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>


       {editIndex !== null ? <button type="submit" className="btn btn-success">Update Info</button> : <button type="submit" className="btn btn-success">Add Info</button>}
      </form>

      <hr />
{editIndex !== null ?null:<Result items={data} onDelete={deleteItem} onUpdate={handleUpdate} />}

      {/* <h3>Submitted Data</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Name: {item.name} | Age: {item.age}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Create;
