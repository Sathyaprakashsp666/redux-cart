import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("products", products);
  return (
    <>
      {products?.map((item) => {
        return (
          <Link to={`/products/${item.id}`}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
                height: "280px",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                margin: "10px",
                padding: "5px",
              }}
              key={item.id}
            >
              <div>
                <img src={item.image} alt="" width="150px" height="150px" />
              </div>
              <div>
                <h4>{item.title}</h4>
              </div>
              <h5 style={{ color: "red" }}>$ {item.price}</h5>
              <p style={{ color: "gray" }}>{item.category}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProductComponent;
