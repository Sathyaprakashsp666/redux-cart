import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProducts, setProducts } from "../Redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState("");
  const [sort, setSort] = useState("");

  // const fetchProducts = async () => {
  //   const res = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // console.log(res.data);
  //   dispatch(setProducts(res.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDrop = (e) => {
    setDrop(e.target.value);
  };
  console.log(drop);

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  console.log(sort);

  const clearFilter = () => {
    setSort("");
    setDrop("");
  };

  return (
    <>
      <div className="productlisting-input">
        <form>
          <input
            type="text"
            placeholder="Search products here..."
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="productlisting-sortcont">
        <div>
          <label for="cloths" className="productlisting-label">
            Choose by category:
          </label>
          <select
            id="sloths"
            name="cloths"
            onChange={handleDrop}
            className="productlisting-select"
          >
            <option value="">All</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div>
          <label for="sort" className="productlisting-label">
            Sort by :
          </label>
          <select
            id="sort"
            name="price"
            onChange={handleSort}
            className="productlisting-select"
          >
            <option value="">All</option>
            <option value="price lh">price low to high</option>
            <option value="price hl">price high to low</option>
          </select>
        </div>
        <div>
          <button onClick={clearFilter} className="productlisting-clearbtn">
            Clear filter
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ProductComponent search={search} drop={drop} sort={sort} />
      </div>
    </>
  );
};

export default ProductListing;
