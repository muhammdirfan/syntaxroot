import React from "react";
import { Arrow, BlackBar, ContactBanner, ContactImg } from "../../assets";
import "../../CustomStyles/index.css";
import { Header } from "../../components";
import { Button } from "flowbite-react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gray200">
        <Header />
        <div className="contact-banner pt-24 pb-16">
          <div className="pt-10 mainContainer">
            <div className="px-12 py-10 contact-us rounded-3xl">
              <div className="grid grid-cols-12 gap-14 items-center">
                <div className="col-span-12 lg:col-span-6">
                  <img src={BlackBar} />
                  <h3 className="text-3xl font-bold py-2">Contact us</h3>
                  <form className="flex flex-col gap-8 py-5">
                    <div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        required={true}
                        className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-12/12 md:w-full border-b-blue150 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        id="email1"
                        type="email"
                        placeholder="E-mail Address"
                        required={true}
                        className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-12/12 md:w-full border-b-blue150 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        id="phone#"
                        type="text"
                        placeholder="Phone no"
                        required={true}
                        className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-12/12 md:w-full border-b-blue150 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        id="question1"
                        type="text"
                        placeholder="How we can help you?"
                        required={true}
                        className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-12/12 md:w-full border-b-blue150 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        id="question1"
                        type="text"
                        placeholder="How did you hear about us?"
                        required={true}
                        className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-12/12 md:w-full border-b-blue150 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        id="message"
                        type="text"
                        placeholder="Message"
                        required={true}
                        className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-12/12 md:w-full border-b-blue150 focus:outline-none"
                      />
                    </div>
                    <div className="py-2 flex justify-center">
                      <Button
                        pill={true}
                        color="#3FAEFF"
                        className="bg-white border border-blue200 text-white"
                      >
                        <span className="text-blue200 px-2">Submit</span>
                      </Button>
                    </div>
                  </form>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <img src={ContactImg} className="w-7/12 md:w-full" />
                </div>
              </div>
            </div>
            {/* <div className="col-span-12 xl:col-span-5 bg-blue250 contact-blue px-24 pr-5 md:pr-80 xl:pr-5 py-10 pt-20">
              <div className="py-5">
                <h2 className="text-dark text-xl font-bold py-2">
                  Headquaters
                </h2>
                <p className="text-gray100 text-sm">
                  Sysntax Root 12121 6th avenu, Fl 12 new york
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-dark text-xl font-bold py-2">
                  California Office
                </h2>
                <p className="text-gray100 text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-dark text-xl font-bold py-2">
                  Give us a call
                </h2>
                <p className="text-gray100 text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-dark text-xl font-bold py-2">
                  General inquries
                </h2>
                <p className="text-gray100 text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-dark text-xl font-bold py-2">
                  Headquaters
                </h2>
                <p className="text-gray100 text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-dark text-xl font-bold py-2">Careers</h2>
                <p className="text-gray100 text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
