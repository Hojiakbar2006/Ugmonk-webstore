import { useLocation, useNavigate } from "react-router-dom";
import "./View.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export function View() {
  const id = useLocation().pathname.split("/").pop();
  const [view, setView] = useState({});
  const [num, setNum] = useState(1);
  const [phoneNum, setPhoneNum] = useState(1);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/products/${id}/`).then((res) => {
      setView(res.data.product);
      setProducts(res.data.related_products);
    });
  }, [id]);


  return (
    <div id="view">
      <div className="view_card">
        <figure>
          <img src={view.image} alt="product_img" />
        </figure>
        <div>
          <div>
            name: <span>{view.name}</span>
          </div>
          <div>
            description: <span>{view.description}</span>
          </div>
          <div>
            for who: <span>{view.for_who}</span>
          </div>
          <div>
            discount price: <span>{view.price - (view.price / 100) * view.discount}</span>
          </div>
          <div>
            total price:{" "}
            <span>{(view.price - (view.price / 100) * view.discount)*num}</span>
          </div>
          <div>
            <button onClick={() => (num < view.stock ? setNum(num + 1) : {})}>
              +
            </button>
            <p>{num}</p>
            <button onClick={() => (num === 1 ? {} : setNum(num - 1))}>
              -
            </button>
          </div>
          <input
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            placeholder="+998(XX)XXXXXXX"
          />
          <div>
            <button
              onClick={() => {
                axios
                  .post(
                    "http://127.0.0.1:8000/api/v1/orders/",
                    {
                      product: view.id,
                      customer: localStorage.getItem('id'),
                      quantity: num,
                      phone_number: phoneNum,
                      is_paid: true,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((res) => {
                    toast.success("Buyurtma jo'natildi");
                    setPhoneNum("")
                  })
                  .catch((err) => {
                    console.log(err);
                    if (err.response.status === 401) {
                      toast.warn(
                        "Buyurtmani jo'natish uchun ro'yxatdan o'ting"
                      );
                    } else if (err.response.status === 400) {
                      toast.error("Noto'g'ri malumot kiritildi");
                    }
                  });
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="product_container">
        {products.map((item) => {
          const discount_price =
            item.price - (item.price / 100) * item.discount;
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate(`/product/view/${item.id}`);
              }}
            >
              <figure>
                <img
                  src={`http://127.0.0.1:8000/${item.image}`}
                  alt="product_img"
                />
              </figure>
              <div>
                <h3>{item.name}</h3>
                <div>
                  {item.price} <span>{discount_price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
