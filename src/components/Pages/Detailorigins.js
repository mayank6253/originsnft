import React, { useState } from "react";
import Trending from "../images/Trending1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { FaEthereum, FaWallet } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import "../origin.css";
import CollectionSlider from "../CollectionSlider";

export default function Detailorigins() {
  const [details, setDetails] = useState(true);

  const showDetails = () => {
    setDetails(!details);
  };

  // LIKES
  const [like, setLike] = useState(false);
  const [likeActivate, setLikeActivate] = useState(false);

  function activateLike() {
    if (likeActivate) {
      setLikeActivate(false);
      setLike(like + 1);
    } else {
      setLikeActivate(true);
      setLike(like + 1);
    }
  }

  return (
    <div>
      <section>
        <div className="container">
          <div
            className="row"
            style={{
              maxWidth: "1100px",
              margin: "100px auto",
              cursor: "pointer",
            }}
          >
            <div className="col-lg-6 col-xs-12">
              <a href="/explore/nfts" className="text-decoration-none">
                {" "}
                <BsArrowLeft
                  size={32}
                  color="#fff"
                  style={{
                    fontWeight: "500",
                    margin: "0px 12px 10px",
                    cursor: "default",
                  }}
                />{" "}
              </a>
              <div className="left-container position-relative">
                <AiOutlineHeart
                  size={30}
                  className="like"
                  onClick={activateLike}
                />
                {like}
                <div className="origin-image">
                  <img src={Trending} alt="" className="img-origin" />
                </div>
                <div className="detail-section">
                  <div className="detail-box">
                    <h6
                      style={{
                        color: "#807b7d",
                        borderBottom: "1px solid",
                        padding: "10px",
                      }}
                    >
                      {" "}
                      <VscThreeBars
                        size={18}
                        style={{ marginTop: "-5px" }}
                        onClick={() => showDetails()}
                      />
                      Details
                    </h6>
                    {details ? (
                      <div className="detail-area">
                        <div className="area1">
                          <span className="da">Contact Address</span> <br />
                          <span className="da">Token ID</span> <br />
                          <span className="da">Token Standard</span> <br />
                          <span className="da">Blockchain</span> <br />
                          <span className="da">Metadara</span> <br />
                        </div>
                        <div className="area2">
                          <span className="da1">Tokenk...15f</span> <br />
                          <span className="da1">ADKasdkskodfjJ..</span> <br />
                          <span className="da">Metaplex</span> <br />
                          <span className="da">Solana</span> <br />
                          <span className="da">Centralized</span> <br />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="right-container">
                <div className="origins-para">
                  <span
                    className="origins fw-lighter"
                    style={{ color: "#fff" }}
                  >
                    Origins
                  </span>
                  <h2 className="text-white" style={{ fontWeight: "500" }}>
                    Origins Logo
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sed arcu lacus. Sed volutpat tellus a ligula
                    scelerisque, vitae auctor urna laoreet. Nulla et vestibulum
                    erat. Ut in porttitor nibh.
                  </p>
                </div>
                <div className="sales-end">
                  <div className="sales-end-content">
                    <div className="sales-end-line">
                      <p style={{ fontSize: "14px", padding: "10px 15px 2px" }}>
                        Sale ends May 12, 2022 at 1:33pm PST
                      </p>
                    </div>
                    <div className="current">
                      <span
                        className="fw-normal"
                        style={{ color: "#807b7d", padding: "10px 15px 2px" }}
                      >
                        Current Price
                      </span>
                      <div className="price-buy">
                        <div className="price-area">
                          <FaEthereum
                            color="#454A75"
                            size={27}
                            style={{ marginTop: "-11px", marginLeft: "20px" }}
                          />{" "}
                          <span
                            className="amount fs-2"
                            style={{ fontWeight: "700", color: "#fff" }}
                          >
                            22.55{" "}
                            <small
                              style={{ color: "#807b7d", fontSize: "16px" }}
                            >
                              ($2,381.96)
                            </small>
                          </span>
                        </div>
                        <div className="buy-area">
                          <a href="/" className="btn btn-sm">
                            <FaWallet /> Buy now
                          </a>
                          <a href="/" className="make-offer">
                            <ImPriceTags /> Make offer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Price History
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque ratione nulla accusantium earum officia
                        iure obcaecati ducimus quis? Perspiciatis veritatis
                        expedita, debitis reprehenderit nemo maxime cupiditate
                        ratione. Omnis officiis, sed iusto fuga facilis labore
                        alias molestias, libero, a commodi temporibus!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Listings
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque ratione nulla accusantium earum officia
                        iure obcaecati ducimus quis? Perspiciatis veritatis
                        expedita, debitis reprehenderit nemo maxime cupiditate
                        ratione. Omnis officiis, sed iusto fuga facilis labore
                        alias molestias, libero, a commodi temporibus!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Item Activity
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque ratione nulla accusantium earum officia
                        iure obcaecati ducimus quis? Perspiciatis veritatis
                        expedita, debitis reprehenderit nemo maxime cupiditate
                        ratione. Omnis officiis, sed iusto fuga facilis labore
                        alias molestias, libero, a commodi temporibus!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Offers
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque ratione nulla accusantium earum officia
                        iure obcaecati ducimus quis? Perspiciatis veritatis
                        expedita, debitis reprehenderit nemo maxime cupiditate
                        ratione. Omnis officiis, sed iusto fuga facilis labore
                        alias molestias, libero, a commodi temporibus!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CollectionSlider />
      </section>
    </div>
  );
}
