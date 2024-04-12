import React from 'react'
import './Section2.css'
import { Link } from 'react-router-dom';


export function Section2() {
  return (
    <div className="section2">
      <div>
        <h2>
          A design studio in Downingtown, PA, creating and curating products
          that combine form & function
        </h2>
        <Link>Read Our Story →</Link>
      </div>
    </div>
  );
}
