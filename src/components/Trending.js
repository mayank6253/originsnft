import React from "react";
import Carousel from "react-grid-carousel";
import Trending1 from "./images/Trending1.png";
import Trending2 from "./images/Trending2.png";
import Trending3 from "./images/Trending3.png";
import Trending4 from "./images/Trending4.png";
import Trending5 from "./images/Trending5.png";
import Trending6 from "./images/Trending6.png";
import Trending7 from "./images/Trending7.png";
import "./Trending.css";

export default function Trending() {
  // const imageInfo = [
  //   {
  //     img2: [Trending2],
  //   },
  //   {
  //     img2: [Trending3],
  //   },
  //   {
  //     img2: [Trending4],
  //   },
  //   {
  //     img2: [Trending5],
  //   },
  //   {
  //     img2: [Trending6],
  //   },
  //   {
  //     img2: [Trending7],
  //   },
  // ];
  // const renderImage = (imageInfo, index) => {
  //   return (
  //     <div className="col-lg-3 col-sm-6 col-xs-12 mx-lg-4" key={index}>
  //       <div className="trending-images">
  //         <img src={imageInfo.img2} alt="" className="treding-imgs" />
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div>
      <section>
        <div
          className="container"
          style={{ maxWidth: "1100px", margin: "50px auto" }}
        >
          <div className="trending">
            <h2 className="text-white">Trending</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="trending-image">
                <img src={Trending1} alt="" className="trending" />
              </div>
            </div>

            <div className="col-lg-6">
              <Carousel cols={3} rows={2} gap={10} autoplay={3000} loop>
                <Carousel.Item>
                  <img width="100%" src={Trending2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending4} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending6} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending7} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending4} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending6} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending7} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending4} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending6} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={Trending7} alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
