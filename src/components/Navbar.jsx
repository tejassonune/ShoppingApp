import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-3 shadow-2xl">
      <div className="">
        <nav>
          <ul className="flex justify-start gap-5 font-medium px-5">
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/men'}><li>Men</li></NavLink>
            <NavLink to={'/women'}><li>Women</li></NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
