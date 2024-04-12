import React from 'react'
import './Category.css'
import men from '../../Assets/Images/men.png'
import women from '../../Assets/Images/women.png'
import accessories from "../../Assets/Images/accessories.png";
import { Link } from 'react-router-dom';

export function Category() {
  return (
    <div className="category">
      <h2>
        Our mission is to create simple, beautiful objects that combine form and
        function.
      </h2>
      <div className="category-card">
        <div>
          <img src={men} alt="" />
          <Link>Shop Mens →</Link>
        </div>
        <div>
          <img src={women} alt="" />
          <Link>Shop Womens →</Link>
        </div>
        <div>
          <img src={accessories} alt="" />
          <Link>Shop Objects →</Link>
        </div>
      </div>
    </div>
  );
}
