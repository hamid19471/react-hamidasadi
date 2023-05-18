import React from "react";
import { menuItems } from "../../FakeAPI/MenuItem";
import logo from "../../assets/logo.png";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { FolderIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="z-10">
      <div className="hidden container h-[75px] md:flex items-center justify-between py-[10px]">
        <ul className="flex items-center justify-between gap-2">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <NavLink
                to={item.link}
                className={`flex items-center justify-between font-normal uppercase md:text-[14px] lg:text-[12px] py-[13px] px-[20px] cursor-pointer hover:text-primary hover:scale-125 transition duration-300`}
              >
                {item.name}
              </NavLink>
              <span
                key={index}
                className="items-center justify-center font-light last:hidden"
              >
                |
              </span>
            </React.Fragment>
          ))}
        </ul>
        <div>
          <img src={logo} alt="hamid asadi" className="w-[188px]" />
        </div>
      </div>
      <div className="fixed w-[400px] py-3  -translate-x-1/2 mobileMenu bottom-4 left-1/2 md:hidden z-50">
        <div className="relative flex items-center justify-around text-primary text-[12px]">
          <div className="flex flex-col items-center justify-center">
            <Link to="/">
              <HomeIcon className="w-7 h-7" />
              <p>Home</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to="/about-me">
              <UserIcon className="w-7 h-7" />
              <p>About</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to="/portfolio">
              <FolderIcon className="w-7 h-7" />
              <p>works</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to="/contact-me">
              <PhoneIcon className="w-7 h-7" />
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
