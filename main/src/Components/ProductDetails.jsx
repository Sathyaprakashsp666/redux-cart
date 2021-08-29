import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  removeProducts,
} from "../Redux/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   console.log(id);
  const products = useSelector((state) => state.selectedProducts);
  const { image, title, price, category, description } = products;
  console.log(products);

  const fetchProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    //console.log(res);
    dispatch(selectProducts(res.data));
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeProducts());
    };
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Object.keys(products).length === 0 ? (
        <div>
          <img
            src="https://icons8.com/preloaders/preloaders/1495/Spinner-3.gif"
            alt=""
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "80vw",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid lightgray",
          }}
        >
          <div
            style={{
              border: "1px solid lightgray",
              width: "50%",
              height: "80vh",
              objectFit: "contain",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={image} alt="" width="90%" height="90%" />
          </div>
          <div
            style={{
              width: "50%",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              gap: "20px",
              padding: "20px",
            }}
          >
            <h2>{title}</h2>
            <button
              style={{
                outline: "none",
                border: "none",
                background: "Green",
                width: "80px",
                height: "40px",
              }}
            >
              $ {price}
            </button>
            <button
              style={{
                outline: "none",
                border: "none",
                background: "gray",
                width: "100%",
                height: "40px",
              }}
            >
              {category}
            </button>
            <p style={{ color: "gray" }}>{description}</p>
            <button
              style={{
                outline: "none",
                border: "none",
                background: "orange",
                width: "100px",
                height: "40px",
                color: "#fff",
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
