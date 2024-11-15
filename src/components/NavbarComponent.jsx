import { useEffect } from "react";
import "../css/hamburgers.css";

const NavbarComponent = () => {
  useEffect(() => {
    document.querySelector(".hamburger").addEventListener("click", () => {
      document.querySelector(".hamburger").classList.toggle("is-active");
      document.querySelector(".menu").classList.toggle("menu-active");
    });
  });

  return (
    <div className="navbar py-6 ps-4 absolute w-full animate__animated animate__fadeInDown">
      <div className="container mx-auto">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="font-bold text-4xl text-white">Nature</h1>
          </div>
          <ul className="menu md:flex items-center gap-10 absolute -top-96 left-0 md:static md:scale-100 md:w-auto w-full md:bg-transparent bg-slate-900 md:py-0 pt-4 transition-all md:opacity-100 opacity-0">
            <li className="md:pb-0 pb-4 text-center">
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li className="md:pb-0 pb-4 text-center">
              <a href="#gallery" className="text-white">
                Gallery
              </a>
            </li>
            <li className="md:pb-0 pb-4 text-center">
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li className="md:pb-0 pb-4 text-center">
              <a href="#services" className="text-white">
                Services
              </a>
            </li>
            <li className="md:pb-0 pb-4 text-center">
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
          <button className="hamburger hamburger--spin md:hidden block h-12 " type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner bg-white after:bg-white before:bg-white"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
