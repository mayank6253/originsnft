import React from "react";
import Resource1 from "./images/Resource1.png";
import Resource2 from "./images/Resource2.png";
import Resource3 from "./images/Resource3.png";

export default function Resources() {
  const resoruceInfo = [
    {
      img: [Resource1],
      tittle: "How to Buy NFT from Origins Marketplace",
    },
    {
      img: [Resource2],
      tittle: "How to easily set up a MetaMask",
    },
    {
      img: [Resource3],
      tittle: "How to Fund MetaMask with ETH",
    },
  ];

  const renderResource = (resoruceInfo, index) => {
    return (
      <div className="col-12 col-md-6 col-lg-3" key={index}>
        <div className="resource">
          <div className="resourceimg">
            <img src={resoruceInfo.img} alt="" className="resource-img" />
          </div>
          <div className="rc">
            <p className="text-light">{resoruceInfo.tittle}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="resource-content">
            <h2
              style={{
                textAlign: "center",
                color: "#fff",
                marginTop: "100px",
                marginBottom: "50px",
              }}
            >
              Resources for getting Started
            </h2>
          </div>
        </div>
      </section>
      <div className="row" style={{ margin: "auto" }}>
        {resoruceInfo.map(renderResource)}
      </div>
      <div className="container">
        <div className="faq">
          <a href="/" className="faq-link">
            See More FAQ
          </a>
        </div>
      </div>
    </div>
  );
}
