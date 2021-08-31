// CREATING ACTIONS

import axios from "axios";
import {
  SET_PRODUCTS,
  SELECTED_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
} from "../actionTypes/actionTpes";

export const setProducts = (product) => {
  return {
    type: SET_PRODUCTS,
    payload: product,
  };
};

export const selectProducts = (product) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeProducts = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
  };
};

//https://fakestoreapi.com/products/${id}

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductbyId = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(selectProducts(res.data));
  } catch (error) {
    console.log(error);
  }
};
