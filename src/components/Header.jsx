import React from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="text-p4 base-bold uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
    {title}
  </LinkScroll>
);
export const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-full z-50 py-10">
      <div className="  container max-lg:px-5 h-14 flex items-center ">
        <a href=" z-2 cursor-pointer flex-1   ">
          <img src="/images/xora.svg" className="lg:hidden" height={55} width={115} alt="xora logo" />{" "}
        </a>
<div className="w-full">


        <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title={"Features"} />
                <div className="dot" />
                <NavLink title={"Pricing"} />
              </li>
              <li className="nav-logo">
                <LinkScroll>
                  <img
                    src="/images/xora.svg"
                    height={55}
                    width={160}
                    alt="xora logo"
                  />{" "}
                </LinkScroll>
              </li>
              <li className="nav-li">
                <NavLink title={"faq"} />
                <div className="dot" />
                <NavLink title={"download"} />
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </div>
    </header>
  );
};
