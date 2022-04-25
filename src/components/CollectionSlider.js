import React from "react";
import Slider from "react-slick";
import { AiOutlineHeart } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import Resource1 from "./images/Resource1.png";
import Group from "./images/Group 810.svg";
import "./collection.css";

export default function CollectionSlider() {
  const explorecardInfo = [
    {
      img: [Resource1],
      title: "Origins",
      subtittle: "Lorem Ipsum Dolor",
      hashtag: "#34920",
      icon: [<FaEthereum />],
      text: "Price",
      price: "74.3",
      icon2: [<AiOutlineHeart />],
      number: "5",
    },
    {
      img: [Resource1],
      title: "Origins",
      subtittle: "Lorem Ipsum Dolor",
      hashtag: "#34920",
      icon: [<FaEthereum />],
      text: "Price",
      price: "74.3",
      icon2: [<AiOutlineHeart />],
      number: "5",
    },
    {
      img: [Resource1],
      title: "Origins",
      subtittle: "Lorem Ipsum Dolor",
      hashtag: "#34920",
      icon: [<FaEthereum />],
      text: "Price",
      price: "74.3",
      icon2: [<AiOutlineHeart />],
      number: "5",
    },
    {
      img: [Resource1],
      title: "Origins",
      subtittle: "Lorem Ipsum Dolor",
      hashtag: "#34920",
      icon: [<FaEthereum />],
      text: "Price",
      price: "74.3",
      icon2: [<AiOutlineHeart />],
      number: "5",
    },
  ];
  const renderCards = (explorecardInfo, index) => {
    return (
      <div className=" col-lg-4 col-md-6 grid-items" key={index}>
        <a href="/explore/nft/origin" className="text-decoration-none">
          <div className="origin">
            <div className="resourceimg">
              <img src={explorecardInfo.img} alt="" className="resource-img2" />
            </div>
            <div className="explore-area bg-black">
              <div className="content-area">
                <div className="tittle">
                  <h5 className="text-white fw-lighter">
                    {explorecardInfo.title}
                  </h5>
                </div>
                <div className="sub-title">
                  <p className="text-white fs-6">{explorecardInfo.subtittle}</p>
                </div>
                <p className="price text-end">Price</p>
                <div className="sapn">
                  <span className="hashtag text-light">
                    {explorecardInfo.hashtag}
                  </span>
                </div>
                <p className="text-end">
                  <FaEthereum color="lightblue" style={{ marginTop: "-5px" }} />{" "}
                  {explorecardInfo.price}
                </p>
              </div>
              <div className="line">
                <hr />
              </div>
              <div className="likes">
                <AiOutlineHeart
                  color="#fff"
                  style={{ marginRight: "5px", marginTop: "-5px" }}
                />
                <span className="five text-light">
                  {explorecardInfo.number}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  };
  return (
    <div>
      <section>
        <div>
          <div className="container">
            <h2 className="text-light fs-5">
              <img src={Group} alt="" className="mx-2" />
              More from this collection
            </h2>
          </div>
          <div
            className="slider-container"
            style={{ maxWidth: "1024px", margin: "auto" }}
          >
            <Slider
              dots={false}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              responsive={[
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {explorecardInfo.map(renderCards)}
              {console.log(explorecardInfo.map(renderCards))}
            </Slider>
          </div>
          <div className="next-button"></div>
        </div>
      </section>
    </div>
  );
}
