import React from "react";
import { useParams } from "react-router-dom";
import { mobile } from "./mobile";

function Product() {
  const { prodID } = useParams();
  console.log("product id ", prodID);
  console.log("list of moblies", mobile);

  const filtereddata = mobile.filter((value) => value.id === prodID);
  console.log("filtered data", filtereddata);

  const finaldata = filtereddata.map((value) => {
    return (
      <div key={value.id}>
        <h1>{value.name}</h1>
        <img src={value.image} alt={value.name} />
        <p>{value.about}</p>
        <p>Price: {value.price}</p>
      </div>
    );
  });

  return (
    <div>{finaldata.length > 0 ? finaldata : <p>Product not found</p>}</div>
  );
}

export default Product;
