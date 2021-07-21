import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiBell,
  FiMenu,
  FiChevronLeft,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { useRecoilState } from "recoil";
import { theme } from "../store";

function Header({ title, back, rightIcon }) {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);

  const changeTheme = () => {
    if (currentTheme == "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
    console.log(theme);
  };

  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      {back && (
        <nav className="navbar navbar-light border-bottom justify-content-start">
          <Link to="/" className="text-dark mr-3 icon">
            <FiChevronLeft />
          </Link>
          <a className="navbar-brand font-weight-bold" href="#">
            {title}
          </a>
        </nav>
      )}
      {rightIcon && (
        <nav className="navbar navbar-light border-bottom  justify-content-between">
          <a className="navbar-brand font-weight-bold" href="#">
            {title}
          </a>
          <div className="">
            <a href="#" className="text-dark mr-3 icon" onClick={changeTheme}>
              {currentTheme == "light" ? <FiMoon /> : <FiSun />}
            </a>
            <a href="#" className="text-dark icon">
              <FiMenu />
            </a>
            {/* <a href="#" className="text-dark mr-3 icon">
              <FiSearch />
            </a>
            <a href="#" className="text-dark mr-3 icon">
              <FiBell />
            </a>
            <a href="#" className="text-dark icon">
              <FiMenu />
            </a> */}
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
