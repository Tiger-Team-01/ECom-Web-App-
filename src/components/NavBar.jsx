import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { Nav } from "react-bootstrap";
import { GetProductDetails } from "../actions";
import "../style/navbar.css";

function NavBar({ setDrawer }) {
  const products = useSelector((state) => state.Product);
  const CartItems = useSelector(state => state.CartItems)
  const [search, setsearch] = useState(false);
  const searchItems = [];
  const [sResults, setsResults] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setsearch(false);
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      {products.length > 0
        ? products.forEach((item) => searchItems.push(item.fields.title))
        : null}
      <div
        className={
          search
            ? "resultBox position-fixed p-1 d-flex flex-column "
            : "resultBox position-fixed p-1  d-flex flex-column hide"
        }
      >
        <input
          type="text"
          placeholder="Search "
          className="p-1 border border-0 text-white"
          onClick={(e) => {
            setsearch(true);
            e.stopPropagation();
          }}
          onChange={(e) => {
            searchItems.forEach((Sitems) => {
              if (Sitems.toLowerCase().includes(e.target.value.toLowerCase())) {
                setsResults([Sitems]);
              }
            });
          }}
        ></input>       
        <div
          className="card text-left p-3 overflow-hidden searchcard"
          id="result"
          onClick={() => {
            if (products.length > 0) {
              products.forEach((ele) => {
                // eslint-disable-next-line
                if (ele.fields.title == sResults) {
                  dispatch(GetProductDetails(ele.id));
                  setsearch(false);
                }
              });
            }
          }}
        >
          <Link to="/details" className="text-white text-decoration-none">
            {sResults ? <>{sResults}</> : <h6>Loading...</h6>}
          </Link>
        </div>
      </div>
      <a
        className="navbar-brand  me-0 ms-2 order-2 order-lg-1  site-header__logo-image"
        href="/"
      >
        Eshop
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="navbar-collapse order-1 order-lg-2 collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#Fashion">
              Shop
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/pages/about-us">
              About
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#Fashion">
                Shop
              </a>

              <a className="dropdown-item" href="/pages/about-us">
                About Us
              </a>

              <a className="dropdown-item" href="/pages/contact-us">
                Contact Us
              </a>

              <a className="dropdown-item" href="/blogs/news">
                News
              </a>

              <a className="dropdown-item" href="/pages/faqs">
                FAQs
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="order-3 navbar-right-elements">
        <Nav className="flex-row">
          <div href="#deets">
            <div className="search">
              <FiSearch
                onClick={(e) => {
                  setsearch(true);
                  e.stopPropagation();
                }}
              />
            </div>
          </div>
          <div href="#deets">
            <button
              className=" border border-0 cartbutton"
              onClick={() => {
                setDrawer(true);
              }}
            >
              <div className="carticon">
                <FiShoppingCart />
              </div>
              <span>CART {CartItems.length}</span>
            </button>
          </div>
        </Nav>
      </div>
    </nav>
  );
}

export default NavBar;
