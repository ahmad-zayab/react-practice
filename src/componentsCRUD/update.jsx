import { useState } from "react";
import "./Create.css";
import { useNavigate } from 'react-router-dom'; 
import Result from "../componentsCRUD/Result";
import record from "./record.json";
const Update=()=>{
 const navigate = useNavigate();
const goToCreate = () => {
    navigate("/"); 
  };
   const handleSubmit = (event) => {
        event.preventDefault();
goToCreate()

   }

    return(
    <>

    <h2>Edit Item</h2> 
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
        <button type="submit" className="btn btn-success">Update Info</button>
        </form>

</>
);

}
export default Update