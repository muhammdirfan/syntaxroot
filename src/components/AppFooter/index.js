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

const AppFooter = () => {
  return (
    <div className="bg-blue200">
      {/* <Footer
        container={false}
      > */}
      <div className="container max-auto px-5 lg:px-24 py-0 pt-5 md:pt-14 lg:pt-24 lg:py-4">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="/" src={FooterLogo} alt="Logo" />
            <h2 className="text-white text-4xl font-bold py-2 font-libre">
              Talk to our Expert Now
            </h2>
            <p className="text-white text-sm font-libre">
              our free consultation service is available you just
            </p>
            <div className="mt-8">
              <p className="text-white text-sm font-libre py-1">
                Feel free to contact us.
              </p>
              <Button pill={true} color="#fff" className="bg-white text-white">
                <span className="text-blue200 pr-2">Reach Us</span>
                <img src={Arrow} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <Footer.Title title="" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white text-xs">
                  Career
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  Contact Us
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  Home
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  Blog
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  About Us
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  Services
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="col-span-6">
              <Footer.Title title="" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white text-xs">
                  <div className="flex">
                    <img src={Phone} /> <p className="pl-1">+1(650) 209 2547</p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  <div className="flex items-start">
                    <img src={Location} />
                    <p className="pl-1 leading-6">
                      USA-head office Syntax Root LLC <br /> new york , NY,
                      11004
                    </p>
                  </div>
                </Footer.Link>
                <Footer.Link href="#" className="text-white text-xs">
                  <div className="flex items-center justify-between w-9/12">
                    <img src={Linkedin} />
                    <img src={Twitter} />
                    <img src={Instagram} />
                    <img src={Facebook} />
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-white text-xs pt-16 text-center w-full">
            All Rights Reserved 2022
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
        </div>
      </div>
      {/* </Footer> */}
    </div>
  );
};

export default AppFooter;
