import React from "react";
import { Link } from "react-router-dom";
import { GiRollingBomb as BombLogoIcon } from "react-icons/gi";

const Header = () => {
  return (
    <header className="p-4">
      <Link to="/" className="flex text-4xl font-bold text-red-600">
        B<BombLogoIcon className="text-white" />
        mb
      </Link>
    </header>
  );
};

export default Header;
