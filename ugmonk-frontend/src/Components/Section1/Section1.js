import React from "react";
import './Section1.css'
import { Link } from "react-router-dom";

export function Section1() {
  return (
    <div className="section1">
      <div className="sec1-card">
        <h2>Analog — The simplest productivity system</h2>
        <button>Now Available →</button>
        <Link href="">Show me how it works</Link>
      </div>
    </div>
  );
}
