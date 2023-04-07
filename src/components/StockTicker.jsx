import React from "react";
function StockTicker() {
    return (
        <div className="align-items-center bg-info d-flex mb-3"  >
            <div className="trigger p-2" >
                <span> সংবাদ শিরোনাম</span>
            </div>
            <marquee
                className=""
                behavior="scroll"
                direction="left"
                onMouseOver={(e) => e.target.stop()}
                onMouseOut={(e) => e.target.start()}
            >
             <a href="#" className="notice-a">   তেঁতুলিয়ায় বিশ চাষির হাতে ১০ প্রজাতির নেদারল্যান্ডের টিউলিপ </a> <span>✧</span>
            </marquee>
        </div>
    )
}
export default StockTicker