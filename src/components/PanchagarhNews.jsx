import React from "react";
import { Link } from "react-router-dom";

const PanchagarhNews = ({ pNews }) => {
 // console.log(pNews);
  const { fiture, short_description, title,id } = pNews;
  return (
    <div className="col-md-4 mb-2">
      <Link to={`post/${id}`} className=" d-flex gap-2 ">
        <img
          src={`https://www.alokitotetulia.com/public/${fiture}`}
          alt="fiture"
          width={"120px"}
          className="h-100"
        />
        <p>{title.substring(0,50)}...</p>
      </Link>
    </div>
  );
};

export default PanchagarhNews;
