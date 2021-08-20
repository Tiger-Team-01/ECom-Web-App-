import React from "react";
import ProductCard from "./ProductCard";
import "../style/productsection.css";

const ProductSection = ({ products }) => {
  const Fashion = [],
    Electronics = [],
    Appliances = [],
    kids = [],
    Mobile = [];
  return (
    <>
      <div className="product-section" id="Fashion">
        <span>Products</span>
        <div className="product-tab">
          <div className="product">
            <div className="nav">
              <h2>Fashion Products</h2>
            </div>
            <div className="products">
              {products.forEach((element) => {
                // eslint-disable-next-line
                if (element.fields.Categories == "Fashion")
                  Fashion.push(element);
              })}
              {Fashion.length > 0
                ? Fashion.map((prod, idx) => (
                    <ProductCard key={idx} prod={prod.fields} />
                  ))
                : null}
            </div>
          </div>

          <div className="collection">
            <img
              src="https://cdn.shopify.com/s/files/1/1364/7933/files/banner23.jpg?v=1521551443"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="product-section" id="Electronics">
        {/* <span>Products</span> */}
        <div className="product-tab">
        <div className="collection">
            <img
              src="https://cdn.shopify.com/s/files/1/1364/7933/files/banner23.jpg?v=1521551443"
              alt=""
            />
          </div>
          <div className="product">
            <div className="nav">
              <h2>Electronics Products</h2>
            </div>
            <div className="products">
              {products.forEach((element) => {
                // eslint-disable-next-line
                if (element.fields.Categories == "Electronics")
                  Electronics.push(element);
              })}
              {Electronics.length > 0
                ? Electronics.map((prod, idx) => (
                    <ProductCard key={idx} prod={prod.fields} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>

      <div className="product-section" id="Appliances">
        {/* <span>Products</span> */}
        <div className="product-tab">
          <div className="product">
            <div className="nav">
              <h2>Home Appliances</h2>
            </div>
            <div className="products">
              {products.forEach((element) => {
                // eslint-disable-next-line
                if (element.fields.Categories == "Appliances")
                  Appliances.push(element);
              })}
              {Appliances.length > 0
                ? Appliances.map((prod, idx) => (
                    <ProductCard key={idx} prod={prod.fields} />
                  ))
                : null}
            </div>
          </div>

          <div className="collection">
            <img
              src="https://cdn.shopify.com/s/files/1/1364/7933/files/banner23.jpg?v=1521551443"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="product-section" id="Kids">
        {/* <span>Products</span> */}
        <div className="product-tab">
          <div className="collection">
            <img
              src="https://cdn.shopify.com/s/files/1/1364/7933/files/banner23.jpg?v=1521551443"
              alt=""
            />
          </div>
          <div className="product">
            <div className="nav">
              <h2>Kid's Products</h2>
            </div>
            <div className="products">
              {products.forEach((element) => {
                // eslint-disable-next-line
                if (element.fields.Categories == "Kids") kids.push(element);
              })}
              {kids.length > 0
                ? kids.map((prod, idx) => <ProductCard key={idx} prod={prod.fields} />)
                : null}
            </div>
          </div>
        </div>
      </div>

      <div className="product-section" id="Mobile">
        {/* <span>Products</span> */}
        <div className="product-tab">
          <div className="product">
            <div className="nav">
              <h2>Mobile Products</h2>
            </div>
            <div className="products">
              {products.forEach((element) => {
                // eslint-disable-next-line
                if (element.fields.Categories == "Mobile") Mobile.push(element);
              })}
              {Mobile.length > 0
                ? Mobile.map((prod, idx) => (
                    <ProductCard key={idx} prod={prod.fields} />
                  ))
                : null}
            </div>
          </div>

          <div className="collection">
            <img
              src="https://cdn.shopify.com/s/files/1/1364/7933/files/banner23.jpg?v=1521551443"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
