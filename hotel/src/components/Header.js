import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/*logo*/}
        <Link to="/">
          {header ? (
            <img className="w-[160px]" src={LogoDark} alt="Logo" />
          ) : (
            <img className="w-[160px]" src={LogoWhite} alt="Logo" />
          )}
        </Link>
        {/* navbar*/}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary traking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <Link to="/" className="hover:text-accent transition">
            Home
          </Link>
          <Link to="" className="hover:text-accent transition">
            Rooms
          </Link>
          <Link to="/spa" className="hover:text-accent transition">
            SPA
          </Link>
          <Link to="/contact" className="hover:text-accent transition">
            Contact
          </Link>
         

        </nav>
      </div>
    </header>
  );
};

export default Header;

