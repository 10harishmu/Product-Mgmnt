import { useNavigate } from "react-router-dom";
import "./css/add_favs.css";
import { useState } from "react";

const Addfavourites = () => {
  let [Product, setProduct] = useState("");
  let [Quality, setquality] = useState("");
  let [Quantity, setquantity] = useState("");
  let [Price, setprice] = useState("");
  let navigate= useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      Product: Product,
      Quality: Quality,
      Quantity: Quantity,
      Price: Price,
    };
    fetch(" http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(data),
    });
    alert("Added to Cart");
    navigate("/favourites")
  };
  let reset=()=>{
    setProduct('');
    setquality('');
    setquantity('');
    setprice('');
  }
  return (
    <section className="addfavs">
      <div className="image">
        <img src="banner.jpg" alt="" width="700px" height="550px" />
      </div>

      <div className="row">
        <form action="" id="add" onSubmit={handleSubmit}>
          <label htmlFor="Item">
            {" "}
            <h1>Product Name</h1> <br />{" "}
            <input
              class=""
              type="text"
              placeholder="Product"
              value={Product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Quality">
            <h1>Product Quality</h1> <br />{" "}
            <input
              class=""
              type="text"
              placeholder="Quality"
              Quality={Quality}
              onChange={(e) => setquality(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Quantity">
            <h1>Product Quanity (in KG)</h1> <br />
            <input
              class=""
              type="number"
              max=""
              min="1"
              placeholder="Quantity"
              Quantity={Quantity}
              onChange={(e) => setquantity(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Price">
            <h1>Price (per KG)</h1>
            <br />{" "}
            <input
              class=""
              type="number"
              max=""
              min="1"
              placeholder="Price"
              value={Price}
              onChange={(e) => setprice(e.target.value)}
            />
          </label>
          <div className="btn">
            <button className="abcd" onClick="">Submit</button>
            {/* <button className="rest" onClick={reset}>Reset</button> */}
          </div>
        </form>
      </div>                                        
    </section>
  );
};

export default Addfavourites;
