import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4">
      <Link to="/" className="text-4xl font-bold text-red-600">
        Bomb
      </Link>
    </header>
  );
};

export default Header;
