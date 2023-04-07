import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function CarouselFadeExample({ latestPost, Information_technology }) {
  return (
    <div className="row">
      <div className="col-md-3 aa my-2">
        <div className="limited-tags m-0 p-3 position-relative quoates-descrip pt-0">
          <p className="bg-info p-2 position-sticky  text-center top-0">
            সর্বশেষ সংবাদ
          </p>
          {latestPost.map((pst) => {
            return (
              <>
                <Link to={`post/${pst.id}`} className="align-items-center border-bottom d-flex gap-2 p-1 my-1">
                  <img
                    width={"100px"}
                    src={`https://www.alokitotetulia.com/public/${pst.fiture}`}
                  />
                  <p className="f-14"> {pst.title} </p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div className="col-md-6">
        <Carousel fade className="m-1">
          <Carousel.Item>
            <Link to={`post/${latestPost[2].id}`}>
              <img
                className="d-block w-100"
                src={`https://www.alokitotetulia.com/public/${latestPost[0].fiture}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="mb-0 py-2 text-bg-danger w-100">
                  {latestPost[0].title}
                </p>
              </Carousel.Caption>

            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`post/${latestPost[1].id}`}>
              <img
                className="d-block w-100"
                src={`https://www.alokitotetulia.com/public/${latestPost[1].fiture}`}
                alt="Second slide"
              />

              <Carousel.Caption>
                <p className="mb-0 py-2 text-bg-danger w-100">
                  {latestPost[1].title}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`post/${latestPost[2].id}`}>
              <img
                className="d-block w-100"
                src={`https://www.alokitotetulia.com/public/${latestPost[2].fiture}`}
                alt="Third slide"
              />

              <Carousel.Caption>
                <p className="mb-0 p-2 text-bg-danger w-100">
                  {latestPost[2].title}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
        <div className="d-flex gap-2 lh-1 mt-2">
          {Information_technology.map((ict) => (
            <Link to={`post/${ict.id}`} className="border mb-2 p-1 position-relative w-25">
              {ict.title}...
            </Link>
          ))}

        </div>
      </div>
      <div className="col-md-3 none">
        <img
          src="https://www.alokitotetulia.com/public/WhatsApp%20Image%202023-01-10%20at%201.09.03%20AM.jpeg"
          alt=""
          className=" img-fluid"
        />
      </div>
    </div>
  );
}

export default CarouselFadeExample;
