import React from "react";
import min1 from "./images/min1.svg";
import min2 from "./images/min2.svg";
import min4 from "./images/min4.svg";
import "./Mint.css";

export default function Mint() {
  const mintsellInfo = [
    {
      img: [min1],
      title: "Set up your wallet",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu",
    },
    {
      img: [min2],
      title: "Create your collection",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu",
    },
    {
      img: [min2],
      title: "Mint your NFTs",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu",
    },
    {
      img: [min4],
      title: "List them for sale",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu",
    },
  ];

  const renderMintSell = (mintsellInfo, index) => {
    return (
      <div className="col-12 col-md-6 col-lg-3" key={index}>
        <div className="choose-image-container">
          <img
            src={mintsellInfo.img}
            alt=""
            className="choose-img"
            style={{ display: "block", margin: "auto", width: "50px" }}
          />
        </div>
        <div className="image-content py-3">
          <h6 className="text-light text-center fs-5">{mintsellInfo.title}</h6>
          <p
            style={{
              color: "#81819C",
              textAlign: "center",
              font: "font: normal normal bold 25px/40px Century Gothic;",
            }}
          >
            {mintsellInfo.description}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="mint-sell-content text-center">
            <h2 style={{ color: "#fff", marginBottom: "70px" }}>
              Mint and sell your NFTs
            </h2>
          </div>
        </div>
      </section>
      <div className="row" style={{ maxWidth: "1100px", margin: "auto" }}>
        {mintsellInfo.map(renderMintSell)}
      </div>
    </div>
  );
}
