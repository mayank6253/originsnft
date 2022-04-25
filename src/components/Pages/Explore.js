import React from "react";
import ExploreCards from "../ExploreCards";
import "./pages.css";

export default function Explore() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="allnfts">
            <div className="nfts-content text-center">
              <h2 className="text-white fs-2 fw-bolder my-5">
                Explore Marketplace
              </h2>
            </div>
            <div className="nfts-area my-4">
              <div className="nfts-link">
                <a
                  href="/explore/nfts"
                  className="link-item"
                  style={{ color: "#ffd73d" }}
                >
                  All
                </a>
                <a href="/" className="link-items">
                  Origins
                </a>
                <a href="/" className="link-items">
                  Cosmos
                </a>
              </div>
            </div>
            <div className="item-content">
              <div className="number">
                <span className="items">1,239 items</span>
              </div>
              <div className="item">
                <div className="btn-group">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ETH
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        BNB
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="min">
                  <span className="minimum">Min</span>
                </div>
                <span className="to text-white">to</span>
                <div className="min">
                  <span className="minimum">Max</span>
                </div>
                <div className="aply">
                  <span className="apply">Apply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExploreCards />
      </section>
    </div>
  );
}
