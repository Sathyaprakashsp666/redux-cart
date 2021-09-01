import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      {pageNumbers.map((num) => {
        console.log(num);
        return <button onClick={() => paginate(num)}>{num}</button>;
      })}
    </div>
  );
};

export default Pagination;
