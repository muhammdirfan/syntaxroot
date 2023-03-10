import React from "react";
import { Button, Footer } from "flowbite-react";
import {
  Arrow,
  Facebook,
  FooterLogo,
  Instagram,
  Linkedin,
  Location,
  Phone,
  Twitter,
} from "../../assets";
import { Link } from "react-router-dom";

const AppFooter = () => {
  const [email, setEmail] = React.useState("");
  return (
    <div className="bg-blue200 pb-10">
      <div className="mainContainer py-0 pt-5 md:pt-14 lg:pt-24 lg:py-4">
        <div className="grid grid-cols-12 gap-5 md:gap-8">
          <div className="col-span-12 md:col-span-5 footerDiv">
            <div className="w-12/12 md:w-10/12 lg:w-6/12">
              <div className="flex items-center">
                <Link to="/">
                  <img src={FooterLogo} alt="logo" />
                </Link>
              </div>
              <div col={true} className="pt-8">
                <div className="text-white text-sm py-2">
                  <div className="flex">
                    <img src={Phone} /> <p className="pl-1">+1(650) 209 2547</p>
                  </div>
                </div>
                <div className="text-white text-sm py-2">
                  <div className="flex items-start">
                    <img src={Location} />
                    <p className="pl-1 leading-6">
                      USA-head office Syntax Root LLC <br /> new york , NY,
                      11004
                    </p>
                  </div>
                </div>
                <div className="text-white text-xs py-2 pt-5">
                  <div className="flex items-center justify-between w-9/12">
                    <img src={Linkedin} className="pr-2" />
                    <img src={Twitter} className="pr-2" />
                    <img src={Instagram} className="pr-2" />
                    <img src={Facebook} className="pr-2" />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-white text-xs pt-8">
                  All Rights Reserved 2023
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center flex-col px-1 md:px-5 h-full">
              <Footer.LinkGroup
                col={false}
                className="grid grid-cols-12 gap-x-8 lg:gap-x-10 gap-y-3 py-5 w-12/12 lg:w-9/12"
              >
                {/* <Footer.Link
                  href="/career"
                  className="col-span-6 lg:col-span-4 font-bold text-white text-xl"
                >
                  Career
                </Footer.Link> */}
                <Footer.Link
                  href="/"
                  className="col-span-6 lg:col-span-4 font-bold text-white text-xl"
                >
                  Home
                </Footer.Link>
                <Footer.Link
                  href="/contact-us"
                  className="col-span-6 lg:col-span-4 font-bold text-white text-xl"
                >
                  Contact Us
                </Footer.Link>
                <Footer.Link
                  href="/about-us"
                  className="col-span-6 lg:col-span-4 font-bold text-white text-xl"
                >
                  About Us
                </Footer.Link>
                {/* <Footer.Link
                  href="#"
                  className="col-span-6 lg:col-span-4 font-bold text-white text-xl"
                >
                  Blog
                </Footer.Link> */}
                <Footer.Link className="col-span-6 lg:col-span-4 font-bold text-white text-xl">
                  Services
                </Footer.Link>
              </Footer.LinkGroup>
              <div>
                <h3 className="text-white text-md font-bold uppercase py-5 pt-10">
                  Drop your email we will reach out to you
                </h3>
                <div className="w-12/12 lg:w-10/12 border border-blue300 bg-light100 rounded-full p-1 flex">
                  <input
                    type="text"
                    className="bg-light100 rounded-full py-1 font-Roboto placeholder:uppercase px-3 w-full max-w-full border-none focus:outline-none focus:border-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    color="#4EAAF3"
                    pill={true}
                    className="bg-blue100 text-white text-xs md:text-sm uppercase rounded-full px-0 md:px-4"
                  >
                    send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
