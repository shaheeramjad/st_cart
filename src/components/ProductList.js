import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div>
      {props.productList.length > 0 ? (
        props.productList.map((product, i) => (
          <Product
            product={product}
            key={i}
            incrementQuantity={props.incrementQuantity}
            index={i}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
          />
        ))
      ) : (
        <h1>No Any Product Exist in List</h1>
      )}
    </div>
  );
}

