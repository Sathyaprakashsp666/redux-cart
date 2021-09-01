import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const ProductComponent = ({ search, drop, sort }) => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("products", products);

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  //Get current post

  const indexofLastpost = currentPage * postPerPage;
  const indextofFirstpost = indexofLastpost - postPerPage;
  const currentPost = products.slice(indextofFirstpost, indexofLastpost);
  //to change page
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  function searchFilter(item) {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }

  function byCategory(item) {
    return item.category.includes(drop);
  }

  function sortbyPrice(a, b) {
    if (sort === "null") {
      return null;
    }
    if (sort === "price lh") {
      return a.price - b.price;
    }
    if (sort === "price hl") {
      return b.price - a.price;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products
          ?.filter(searchFilter)
          .filter(byCategory)
          .sort(sortbyPrice)
          .map((item) => {
            return (
              <Link to={`/products/${item.id}`}>
                <div className="productcomponent-cont" key={item.id}>
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
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={products.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProductComponent;
