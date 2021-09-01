import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  removeProducts,
  fetchProductbyId,
} from "../Redux/actions/productActions";
import "./style.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   console.log(id);
  const products = useSelector((state) => state.selectedProducts);
  const { image, title, price, category, description } = products;
  console.log(products);

  // const fetchProduct = async () => {
  //   const res = await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   //console.log(res);
  //   dispatch(selectProducts(res.data));
  // };

  useEffect(() => {
    dispatch(fetchProductbyId(id));
    return () => {
      dispatch(removeProducts());
    };
  }, [id]);

  return (
    <div className="productdetails-cont">
      {Object.keys(products).length === 0 ? (
        <div>
          <img
            src="https://icons8.com/preloaders/preloaders/1495/Spinner-3.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="productdetails-subCont">
          <div className="productdetails-leftcont">
            <img src={image} alt="" width="90%" height="90%" />
          </div>
          <div className="productdetails-rightcont">
            <h2>{title}</h2>
            <button className="productdetails-btn">$ {price}</button>
            <button className="productdetails-btn productdetails-btn2">
              {category}
            </button>
            <p style={{ color: "gray" }}>{description}</p>
            <button className="productdetails-addbtn">Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
