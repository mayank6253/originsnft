import React from "react";
import collection1 from "./images/collection1.png";
import collection2 from "./images/collection2.png";
import collection3 from "./images/collection3.png";
import collection4 from "./images/collection4.png";
import c1 from "./images/c1.png";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4.png";
import Slider from "react-slick";
export default function Collections() {
  const collectionInfo = [
    {
      img: [collection1],
      img2: [c1],
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: [collection2],
      img2: [c2],
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: [collection3],
      img2: [c3],
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: [collection4],
      img2: [c4],
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      img: [collection1],
      img2: [c1],
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
  ];

  const renderCollection = (collectionInfo, index) => {
    return (
      <div className="image-container" key={index}>
        <div
          className="card"
          style={{
            width: "16rem",
            borderRadius: "25px",
            border: "5px solid #fff",
          }}
        >
          <img src={collectionInfo.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <img src={collectionInfo.img2} alt="" className="img-collection" />
            <p className="card-text" style={{ marginTop: "20px" }}>
              {collectionInfo.description}
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="heading-container">
        <h2 className="text-light">Top collections</h2>
      </div>
      <div
        className="slider-container"
        style={{ maxWidth: "1100px", margin: "auto" }}
      >
        <Slider
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 414,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {collectionInfo.map(renderCollection)}
          {console.log(collectionInfo.map(renderCollection))}
        </Slider>
      </div>
      <div className="next-button"></div>
    </div>
  );
}
