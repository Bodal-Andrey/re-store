import React from "react";
import BookList from "../book-list/book-list.jsx";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table.jsx";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
