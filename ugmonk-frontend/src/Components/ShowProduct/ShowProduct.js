import React from "react";
import "./ShowProduct.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ShowProduct() {
  const data = useSelector((state) => state.product);
  const navigate = useNavigate();

  return (
    <div className="ShowProduct">
      <div className="container">
        <div className="product_container">
          {data.map((item) => {
            const discount_price =
              item.price - (item.price / 100) * item.discount;
            const name = item.name.split(" ").slice(1, 3);
            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`product/view/${item.id}`);
                }}
              >
                <figure>
                  <img src={item.image} alt={item.name} />
                </figure>
                <div>
                  <h3>{name}</h3>
                  <div>
                    {item.price}{" "}
                    <span> {item.discount === 0 ? "no" : discount_price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
