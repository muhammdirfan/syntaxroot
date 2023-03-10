import { Navbar } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppDev,
  ArrowBlack,
  ArrowDown,
  Brand,
  ITConsult,
  PlatformSelection,
  ProductDesign,
  QualityAssurance,
  WebDev,
} from "../../assets";

const Header = () => {
  const [navBg, setNavBg] = useState(false);
  const [navActive, setNavActive] = useState("/");
  const [hover, setHover] = useState(false);

  let screenHeight = window.innerHeight;

  const navPath = window.location.pathname;

  useEffect(() => {
    setNavActive(navPath);
  }, []);

  console.log(navPath, "navPath");

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <div className="header">
      <Navbar
        fluid={false}
        rounded={true}
        className="mainContainer bg-transparent py-10 my-1"
      >
        <Navbar.Brand className="z-10">
          <Link to="/">
            <img src={Brand} className="mr-3 h-6 sm:h-9" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="bg-white md:bg-transparent">
          <Navbar.Link
            href="/"
            className={`${
              navActive == "/" ? "navActive" : "text-dark50"
            } ml-2 nav md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-none relative`}
            active={false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about-us"
            className={`${
              navActive == "/about-us" ? "navActive" : "text-dark50"
            } ml-2 nav md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-none relative`}
            active={false}
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            // href={`${navActive == "/" ? "#our-services" : ""}`}
            className={`${
              navActive == "/#our-services" ? "navActive" : "text-dark50"
            } ml-2 nav md:ml-2 lg:ml-4 xl:ml-7 text-base trigger-dropdown relative`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="flex">
              <span className="pr-2">Services</span>
              <img
                src={hover ? ArrowDown : ArrowBlack}
                className="arrow-down"
              />
            </div>
            <div className="dropdown">
              <ul>
                <li>
                  <Navbar.Link
                    href="/app-development"
                    className={`${
                      navActive == "/app-development"
                        ? "navActive"
                        : "text-dark50"
                    } ml-2 nav-dark md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-dark50 relative flex`}
                    active={false}
                  >
                    <img src={WebDev} className="pr-2" />
                    App Development
                  </Navbar.Link>
                </li>
                <li>
                  <Navbar.Link
                    href="/web-development"
                    className={`${
                      navActive == "/web-development"
                        ? "navActive"
                        : "text-dark50"
                    } ml-2 nav-dark md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-dark50 relative flex`}
                    active={false}
                  >
                    <img src={AppDev} className="pr-2" />
                    Web Development
                  </Navbar.Link>
                </li>
                <li>
                  <Navbar.Link
                    href="/product-design"
                    className={`${
                      navActive == "/product-design"
                        ? "navActive"
                        : "text-dark50"
                    } ml-2 nav-dark md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-dark50 relative flex`}
                    active={false}
                  >
                    <img src={ProductDesign} className="pr-2" />
                    Product Design
                  </Navbar.Link>
                </li>
                <li>
                  <Navbar.Link
                    href="/quality-assurance"
                    className={`${
                      navActive == "/quality-assurance"
                        ? "navActive"
                        : "text-dark50"
                    } ml-2 nav-dark md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-dark50 relative flex`}
                    active={false}
                  >
                    <img src={QualityAssurance} className="pr-2" />
                    Quality Assurance
                  </Navbar.Link>
                </li>
                <li>
                  <Navbar.Link
                    href="/IT-consultion"
                    className={`${
                      navActive == "/IT-consultion"
                        ? "navActive"
                        : "text-dark50"
                    } ml-2 nav-dark md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-dark50 relative flex`}
                    active={false}
                  >
                    <img src={ITConsult} className="pr-2" />
                    IT Consultion
                  </Navbar.Link>
                </li>
                <li>
                  <Navbar.Link
                    href="/platform-selection"
                    className={`${
                      navActive == "/platform-selection"
                        ? "navActive"
                        : "text-dark50"
                    } ml-2 nav-dark md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-dark50 relative flex`}
                    active={false}
                  >
                    <img src={PlatformSelection} className="pr-2" />
                    Platform Selection
                  </Navbar.Link>
                </li>
              </ul>
            </div>
          </Navbar.Link>
          {/* <Navbar.Link
            href="/career"
            className={`${
              navActive == "/career" ? "navActive" : "text-dark50"
            } ml-2 nav md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-none relative`}
          >
            Career
          </Navbar.Link> */}
          <Navbar.Link
            href="/contact-us"
            className={`${
              navActive == "/contact-us" ? "navActive" : "text-dark50"
            } ml-2 nav md:ml-2 lg:ml-4 xl:ml-7 text-base hover:text-none relative`}
          >
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
