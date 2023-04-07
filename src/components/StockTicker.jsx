import React from "react";
import { Link } from "react-router-dom";
function StockTicker({ data }) {
    return (
        <div className="align-items-center bg-info d-flex mb-3"  >
            <div className="trigger p-2" >
                <span> সংবাদ শিরোনাম</span>
            </div>
            <marquee
                className=""
                behavior="scroll"
                direction="left"
            >  {   data.latestPost && data.latestPost.map((dt) => <Link to={`post/${dt.id}`} >  <span>✧</span> {dt.title} </Link>)  }
            </marquee>
        </div>
    )
}
export default StockTicker