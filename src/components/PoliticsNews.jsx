import React from "react";
import { Link } from "react-router-dom";

const PoliticsNews = ({ pews }) => {
  const { title, fiture, short_description,id } = pews;
  return (
    <Link to={`post/${id}`} className=" d-flex gap-2 mb-3">
      <img
        src={`https://www.alokitotetulia.com/public/${fiture}`}
        alt="fiture"
        width={"120px"}
        className="h-100"
      />
      <p>{title}</p>
    </Link>
  );
};

export default PoliticsNews;
