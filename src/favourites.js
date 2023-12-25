import React from "react";
import { useState,useEffect} from "react";
import "./css/favourite.css";
import FavLogic from "./favLogic";

function Favourite() {
  let [grocery, setData] = useState([]);

useEffect(() => {
    let fetchdata = async() => {

    let response= await fetch(" http://localhost:3000/images")
    let resdata= await response.json(); 
    setData(resdata) 
    };
    fetchdata() 
  },[])
  
  let handleDelete = (id) => {
    setData(grocery.filter((x) => x.id !==id));
  };
  return (
    <div className="favt">
      <FavLogic  data={grocery} Title="Products In Cart" fn={handleDelete}/>
      <h2>Numbers Of Items : {grocery.length}</h2>
    </div>
  );
};
export default Favourite;




