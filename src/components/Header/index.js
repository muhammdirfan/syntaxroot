import { Navbar } from "flowbite-react";
import React from "react";
import { Brand } from "../../assets";

const Header = () => {
  return (
    <Navbar
      fluid={false}
      rounded={true}
      className="header container w-10/12 ml-5 sm:ml-14 lg:ml-36 mr-0 lg:mr-24 px-16 py-8 my-5"
    >
      <Navbar.Brand
        // as={{
        //   $$typeof: Symbol(react.forward_ref),
        //   render: LinkWithRef,
        // }}
        to="/"
      >
        <img src={Brand} className="mr-3 h-6 sm:h-9" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className="mx-2 md:mx-2 lg:mx-4 xl:mx-7 text-base text-dark50"
          active={false}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          //   as={{
          //     $$typeof: Symbol(react.forward_ref),
          //     render: LinkWithRef,
          //   }}
          to="/navbars"
          className="mx-2 md:mx-2 lg:mx-4 xl:mx-7 text-base text-dark50"
        >
          About Us
        </Navbar.Link>
        <Navbar.Link
          href="/navbars"
          className="mx-2 md:mx-2 lg:mx-4 xl:mx-7 text-base text-dark50"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="/navbars"
          className="mx-2 md:mx-2 lg:mx-4 xl:mx-7 text-base text-dark50"
        >
          Career
        </Navbar.Link>
        <Navbar.Link
          href="/contact-us"
          className="mx-2 md:mx-2 lg:mx-4 xl:mx-7 text-base text-dark50"
        >
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
