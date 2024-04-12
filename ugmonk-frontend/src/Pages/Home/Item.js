// ItemsList.js

import React from "react";
import { useQuery } from "react-query";
import { fetchItems } from "./api";

const ItemsList = () => {
  const { data: items, error, isLoading } = useQuery("items", fetchItems);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Items List:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
