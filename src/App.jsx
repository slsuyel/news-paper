import "./components/Custom.css";
import "./App.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import National from "./components/National";
import PanchagarhNews from "./components/PanchagarhNews";
import PoliticsNews from "./components/PoliticsNews";
import Education from "./components/Education";
import Entertainment from "./components/Entertainment";
import CarouselFadeExample from "./components/CarouselFadeExample";
import Spinners from "./components/Spinners";
import { useEffect, useState } from "react";
import Home from "./components/Home";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const news = useLoaderData();
  // console.log(news);
  const {
    entertainment,
    latestPost,
    Panchagarh_news,
    politics,
    education,
    Information_technology,
  } = news;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <>
      <CarouselFadeExample
        latestPost={latestPost}
        Information_technology={Information_technology}
      />

      <div className="background p-3">
        <h2 className="bg-info fs-2 mb-0 p-2 pb-0 w-100">জাতীয়</h2>
        <div className="national-news">
          {latestPost.map((post) => (
            <National post={post} key={post.id} />
          ))}
        </div>
      </div>
      <div className="m-0 my-2 row">
        <div className="bggg col-md-8 text-dark mb-2">
          <p className="bg-info fs-2 mb-0 p-2 pb-0 w-100">পঞ্চগড়ের খবর</p>
          <div className="mt-3 p-2 row">
            {Panchagarh_news.map((pNews) => (
              <PanchagarhNews key={pNews.id} pNews={pNews} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <p className="bg-info fs-2 mb-0 p-2 pb-0 w-100">রাজনীতি</p>
          <div className="my-2">
            {politics.map((pews) => (
              <PoliticsNews key={pews.id} pews={pews} />
            ))}
            <img
              src="https://bermangraphics.com/images/450-roses.jpg"
              alt=""
              className="img-fluid mt-3 w-100 add-side-img"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <p className="bg-info fs-2 mb-0 p-2 pb-0 w-100"> বিনোদন </p>
          
          <div className="row mt-2 p-2">
            {entertainment.map((entNews) => (
              <Entertainment key={entNews.id} entNews={entNews} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <p className="bg-info fs-2 mb-0 p-2 pb-0 w-100">শিক্ষা</p>
          <div className="my-2">
            {education.map((eduNews) => (
              <Education eduNews={eduNews} key={eduNews.id} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}


export default App;
