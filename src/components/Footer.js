import React from "react";
import group from "./images/Group 2239.png";
import {
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaReddit,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <section>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="footer-area">
            <div className="row">
              <div className="col-lg-3">
                <div className="footerarea1">
                  <div className="footer-logo">
                    <img
                      src={group}
                      alt=""
                      className="footer-img"
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="footer-text">
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "lighter",
                        paddingTop: "20px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed arcu lacus. Sed volutpat tellus a ligula
                      scelerisque, vitae auctor urna laoreet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-area">
                  <div className="footer-content">
                    <h6 style={{ color: "#fec200" }}>About Us</h6>
                    <p className="items">White Paper</p>
                    <p className="items">TOKENOMICS</p>
                    <p className="items">Roadmap</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-area">
                  <div className="footer-content">
                    <h6 style={{ color: "#fec200" }}>Utilities</h6>
                    <p className="items">The Cosmos</p>
                    <p className="items">Recordian</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-area">
                  <div className="footer-content">
                    <h6 style={{ color: "#fec200" }}>Support</h6>
                    <p className="items">FAQ</p>
                    <p className="items">BUY $OGS</p>
                    <p className="items">BUY $COSMOS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-area">
                  <div className="footer-content">
                    <h6 style={{ color: "#fec200" }}>Community</h6>
                    <div className="social-links">
                      <a href="/" className="link">
                        <FaInstagram />
                      </a>
                      <a href="/" className="links">
                        <FaTelegram />
                      </a>
                      <a href="/" className="links">
                        <FaTwitter />
                      </a>
                      <a href="/" className="links">
                        <FaFacebook />
                      </a>

                      <a href="/" className="link2">
                        <FaReddit />
                      </a>

                      <a href="/" className="links">
                        <FaYoutube />
                      </a>
                      <a href="/" className="links">
                        <FaDiscord />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
