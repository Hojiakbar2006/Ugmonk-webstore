import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Icons/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { acFormModal } from "../../Redux/Form";
import { toast } from "react-toastify";

export function Navbar() {
  const navigate = useNavigate();
  const modal = useSelector((state) => state.formModal);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo" onClick={() => navigate("/")}>
            <h2>Ugmonk</h2>
            <img src={logo} alt="" />
          </div>
          <div className="items">
            <Link to="/order">Order</Link>
            {token ? (
              <Link>{name}</Link>
            ) : (
              <>
                <Link
                  onClick={() => (token ? "" : dispatch(acFormModal(true)))}
                >
                  Sign up
                </Link>

                <Link
                  onClick={() => (token ? "" : dispatch(acFormModal(true)))}
                >
                  login
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
      <div
        className="modalForm"
        style={modal ? { display: "flex" } : { display: "none" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.username.value;
            const password = e.target.password.value;

            axios
              .post("http://127.0.0.1:8000/api/v1/register/", {
                username: name,
                password: password,
              })
              .then((res) => {
                console.log(res);
                toast.success("Muvafaqiyatli ro'yxatdan o'tdingiz");
                dispatch(acFormModal(false));
                localStorage.setItem("id", res.data.id);
                localStorage.setItem("name", name);
                localStorage.setItem("token", res.data.access);
              })
              .catch((err) => {
                console.log(err);
                dispatch(acFormModal(false));
              });
          }}
        >
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}
