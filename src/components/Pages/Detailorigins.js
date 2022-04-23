import React, { useState } from "react";
import Resource1 from "../images/Trending1.png";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa";
import "../origin.css";

export default function Detailorigins() {
  const [details, setDetails] = useState(true);

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <div>
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 col-md-12">
                <div className="origin-page">
                  <div className="originimg">
                    <div className="img-card">
                      <AiOutlineHeart
                        size={30}
                        className="heart"
                        style={{
                          color: "#fff",
                          position: "absolute",
                          left: "53%",
                          top: "2%",
                          cursor: "pointer",
                        }}
                      />
                      <img src={Resource1} alt="" className="card-img" />
                    </div>
                  </div>
                </div>
                <div className="origin-details">
                  <h6
                    style={{
                      color: "#fff",
                      marginTop: "20px",
                      marginLeft: "2px",
                      borderBottom: "1px solid",
                      padding: "0px 8px 10px",
                    }}
                  >
                    <VscThreeBars
                      style={{
                        marginTop: "-4px",
                        marginLeft: "2px",
                        cursor: "pointer",
                      }}
                      onClick={() => showDetails()}
                    />
                    Details
                  </h6>
                  {details ? (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="details">
                          <span className="text-light fw-lighter">
                            Contract Address
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Token ID
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Token Standard
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Blockchain
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Metadara
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="detail-content">
                          <span
                            className="fw-lighter"
                            style={{ color: "#FEC200" }}
                          >
                            Tokenk...15f
                          </span>{" "}
                          <br />
                          <span
                            className=" fw-lighter"
                            style={{ color: "#FEC200" }}
                          >
                            ADKasdkskodfjJ..
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Metaplex
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Solana
                          </span>{" "}
                          <br />
                          <span className="text-light fw-lighter">
                            Centralized
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-12 col-lg-5 col-md-12">
                <div className="content-area">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="text-light fw-lighter">Origins</span>
                    </div>
                    <div className="col-md-6">
                      <div className="origin-icons">
                        <a
                          href="/explore/nft/origin"
                          style={{ textDecoration: "none", color: "grey" }}
                        >
                          {" "}
                          <IoMdRefresh
                            className="refresh-icon"
                            size={25}
                            style={{
                              transform: "rotate(180deg)",
                              borderLeft: "1px solid",
                              height: "30px",
                            }}
                          />
                        </a>
                        <AiOutlineShareAlt
                          size={25}
                          style={{ borderRight: "1px solid", height: "30px" }}
                        />
                        <IoEllipsisVertical size={25} className="ellips-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="origin-heading">
                      <h2 className="fs-2 fw-bold text-white">Origins Logo</h2>
                      <p style={{ color: "#B3B3B3" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed arcu lacus. Sed volutpat tellus a ligula
                        scelerisque, vitae auctor urna laoreet. Nulla et
                        vestibulum erat. Ut in porttitor nibh. Maecenas nibh
                        lorem, tincidunt at faucibus nec, luctus id ligula.
                        Integer nec lorem fringilla dolor suscipit rhoncus.
                      </p>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="sale-ends">
                      <div className="sale-ends-content">
                        <p style={{ color: "#FFFFFF", fontWeight: "lighter" }}>
                          Sale ends May 12, 2022 at 1:33pm PST
                        </p>

                        <div className="price-container">
                          <span
                            className="current"
                            style={{ color: "#FFFFFF", fontWeight: "lighter" }}
                          >
                            Current price
                          </span>
                          <p
                            className="price"
                            style={{ color: "#FFFFFF", fontWeight: "lighter" }}
                          >
                            <FaEthereum /> 22.55 ($2,381.96)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
