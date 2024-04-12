import React from "react";
import { useSelector } from "react-redux";
import "./Loading.css";

export function Loading() {
  const isLoading = useSelector((state) => state.loading);

  if (isLoading) {
    // document.querySelector("body").style.position = "fixed";
    return (
      <div className="loading">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    // document.querySelector("body").style.position = "";
  }
}
