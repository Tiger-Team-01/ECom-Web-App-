import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function NavBar({ setDrawer }) {
  const products = useSelector((state) => state.Product);
  const [search, setsearch] = useState(false);
  const searchItems = [];
  const [sResults, setsResults] = useState('');

  return (
    <nav className="navbar navbar-expand navbar-light bg-dark position-fixed top-0 w-100 ">
      {products.length > 0
        ? products.forEach((item) => searchItems.push(item.fields.title))
        : null}
      <div
        className={
          search
            ? "search position-fixed p-5 d-flex flex-column-reverse "
            :
             "search position-fixed p-5  d-flex flex-column-reverse hide"
        }
      >
        {
          // sResults.length>0?
          // sResults.map((itm,idx)=>
          <div 
          className="card text-left border border-2 p-3 m-2 overflow-hidden searchcard"
          id="result"
          >
          <div className="card-title">
          {sResults?<>{sResults}</>:<h1>loading...</h1>}
            </div>
        </div>
        // )
        // :null
        }
      </div>
      <div className="nav navbar-nav container-fluid d-flex justify-content-between p-2 ms-5 me-5">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h3>React Cart App</h3>
        </Link>
        <input
          placeholder="Search "
          className="p-2"
          onBlur={()=>setsearch(false)}
          onFocus={()=>setsearch(true)}
          onChange={(e) => {
            searchItems.forEach((Sitems) => {
              if (Sitems.toLowerCase().includes(e.target.value.toLowerCase())) {
                setsResults([Sitems])
                console.log(Sitems);
              }
            });
          }}
        ></input>

        <button
          className="bg-transparent border border-0"
          onClick={() => {
            setDrawer(true);
          }}
        >
          <img
            src="https://img.icons8.com/color/50/000000/shopping-cart.png"
            alt=""
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
