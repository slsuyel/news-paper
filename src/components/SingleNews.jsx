import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleNews = () => {
    const data = useLoaderData();
    const { title, fiture, long_description, id, author, created_at } = data;

    const dt = new Date(created_at);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formatted_date = dt.toLocaleDateString('en-US', options);

    return (
        <div className="row">
            <div className="col-md-8">
                <h2>{title}</h2>
                {author === 'Admin' ? (
                    <p>নিজস্ব প্রতিবেদক</p>
                ) : (
                    <p>{author}</p>
                )}
                <p>{formatted_date}</p> {/* Display the formatted date */}
                <img
                    src={`https://www.alokitotetulia.com/public/${fiture}`}
                    alt=""
                    className="w-100"
                />
                <div className="mt-5" dangerouslySetInnerHTML={{ __html: long_description.replace(/<\/?[^>]+(>|$)/g, "") }}></div>

                <div className=" my-5">
                    <p className="bg-info fs-2 px-3">আরও পড়ুন  </p>
                    <div>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque, quos distinctio atque, odio praesentium sint quam voluptates necessitatibus quod vel aliquid earum tempore quasi architecto velit. Id, quia eaque?

            </div>
        </div>
    );
};

export default SingleNews;
