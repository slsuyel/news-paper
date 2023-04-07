import React from 'react';
import { Link } from 'react-router-dom';

const Entertainment = ({entNews}) => {
    const { fiture, short_description, title,id } = entNews;
    return (
      <div className="col-md-4 mb-2">
        <Link to={`post/${id}`} className=" d-flex gap-2 ">
          <img
            src={`https://www.alokitotetulia.com/public/${fiture}`}
            alt="fiture"
            width={"120px"}
            className="h-100"
          />
          <p>{title}</p>
        </Link>
      </div>
    );
};

export default Entertainment;