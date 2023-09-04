import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h3 className="title">All Categories</h3>

      <ul>
        {categories.map((category) => (
          <li className="left-category-list" key={category.id}>
            <Link>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNav;
