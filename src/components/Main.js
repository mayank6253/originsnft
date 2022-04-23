import React from "react";
import logo from "./images/logo3d.png";
import group from "./images/Group 1960.png";
import Collections from "./Collections";
import Release from "./Release";
import Bottom from "./Bottom";
import Trending from "./Trending";

export default function Main() {
  return (
    <div>
      <section>
        <div className="container" style={{ marginTop: "100px" }}>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-12 col-lg-5 col-md-12">
              <div className="heading">
                <h1
                  className="text-light"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Lorem Ispum Dolar Sit Amet
                </h1>
                <p
                  style={{
                    font: " normal normal normal 17px/29px Century Gothic",
                  }}
                >
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
                  ipsum dolor sit amet.
                </p>
                <div className="buttons">
                  <a href="/explore/nfts" className="btn btn-lg">
                    Explore
                  </a>
                  <a href="/mint" className="btn btn-lg-outline mx-3">
                    Mint
                  </a>
                </div>
                <div className="span-tag">
                  <img src={group} alt="" className="structure" />{" "}
                  <span className="learn">Learn more about Origins</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-12">
              <div className="image-container">
                <img src={logo} alt="" className="nft-img" />
              </div>
            </div>
          </div>
        </div>
        <Trending />
        <Collections />
        <Release />
        <Bottom />
      </section>
    </div>
  );
}
