import React from "react";
import { CgProfile } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import group from "./images/Group 2239.png";

export default function Navbar() {
  return (
    <div>
      <section>
        <div className="container" style={{maxWidth:"1100px", margin:"auto"}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <div className="navbar-logo">
                  <img src={group} alt="" className="nav-logo" />
                </div>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=" #navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form className="d-flex">
                  <input
                    className="form-control px-4"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle mx-2"
                      href="/explore/nfts"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Explore
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/explore/nfts">
                          All NFT
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href=" /">
                          Origin
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href=" /">
                          Cosmos
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown mx-2">
                    <a
                      className="nav-link dropdown-toggle"
                      href=" /"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Stats
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/stat/topnfts">
                          Ranking
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Activites
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="/">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link" href="/mint">
                      Mint
                    </a>
                  </li>
                </ul>
                <div className="icons d-flex">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href=" /"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <CgProfile size={25} color="#AB782B" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href=" /">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href=" /">
                          Favorites
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href=" /">
                          Settings
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <GiWallet size={25} color="#AB782B" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
