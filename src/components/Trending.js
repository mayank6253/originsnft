import React from "react";
import Trending1 from "./images/Trending1.png";
import Trending2 from "./images/Trending2.png";
import Trending3 from "./images/Trending3.png";
import Trending4 from "./images/Trending4.png";
import Trending5 from "./images/Trending5.png";
import Trending6 from "./images/Trending6.png";
import Trending7 from "./images/Trending7.png";
import "./Trending.css";

export default function Trending() {
  const imageInfo = [
    {
      img2: [Trending2],
    },
    {
      img2: [Trending3],
    },
    {
      img2: [Trending4],
    },
    {
      img2: [Trending5],
    },
    {
      img2: [Trending6],
    },
    {
      img2: [Trending7],
    },
  ];
  const renderImage = (imageInfo, index) => {
    return (
      <div className="col-lg-3 col-sm-6 col-xs-12 mx-lg-4" key={index}>
        <div className="trending-images">
          <img src={imageInfo.img2} alt="" className="treding-imgs" />
        </div>
      </div>
    );
  };
  return (
    <div>
      <section>
        <div className="container" style={{maxWidth:"912px", margin:"auto"}}>
          <h2 className="text-light">Trending</h2>

          <div className="container d-flex">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="treding1">
                <img src={Trending1} alt="" className="trending1-img" />
              </div>
            </div>

            <div className="row">{imageInfo.map(renderImage)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
