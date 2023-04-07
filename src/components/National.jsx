import React from "react";
import './Custom.css'
import { Link } from "react-router-dom";
const National = ({ post }) => {
  const { title, fiture,short_description,id  } = post;
  return (
    <Link to={`post/${id}`} className="">
      <img src={`https://www.alokitotetulia.com/public/${fiture}`} alt="fiture" width={'200px'} className="w-100"/>
      <p>{short_description ? short_description.substring(0, 50) : 'পঞ্চগড়ের তেঁতুলিয়ায়'}</p>
    </Link>
  );
};

export default National;
