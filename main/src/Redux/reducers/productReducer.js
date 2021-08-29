import {
  SET_PRODUCTS,
  SELECTED_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
} from "../actionTypes/actionTpes";

const init = {
  products: [],
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCTS:
      return { ...state, ...payload };

    case REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};
