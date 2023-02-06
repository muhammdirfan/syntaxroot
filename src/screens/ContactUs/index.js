import React from "react";
import { BlackBar } from "../../assets";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "../../CustomStyles/index.css";
import { Header } from "../../components";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gray200">
        <Header />
        <div className="pt-40">
          <div className="grid grid-cols-12 gap-0 pt-10">
            <div className="col-span-12 xl:col-span-6 px-14 py-10 pt-20 contact-us">
              <img src={BlackBar} />
              <h3 className="text-3xl font-bold py-2 font-libre">Contact us</h3>
              <form className="flex flex-col gap-4 py-5">
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required={true}
                    className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-full border-b-blue150 focus:outline-none focus:shadow-none focus:border-0"
                  />
                </div>
                <div>
                  <input
                    id="email1"
                    type="email"
                    placeholder="E-mail Address"
                    required={true}
                    className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-full border-b-blue150 focus:outline-none focus:shadow-none focus:border-0"
                  />
                </div>
                <div>
                  <input
                    id="phone#"
                    type="text"
                    placeholder="Phone no"
                    required={true}
                    className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-full border-b-blue150 focus:outline-none focus:shadow-none focus:border-0"
                  />
                </div>
                <div>
                  <input
                    id="question1"
                    type="text"
                    placeholder="How we can help you?"
                    required={true}
                    className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-full border-b-blue150 focus:outline-none focus:shadow-none focus:border-0"
                  />
                </div>
                <div>
                  <input
                    id="question1"
                    type="text"
                    placeholder="How did you hear about us?"
                    required={true}
                    className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-full border-b-blue150 focus:outline-none focus:shadow-none focus:border-0"
                  />
                </div>
                <div>
                  <input
                    id="message"
                    type="text"
                    placeholder="Message"
                    required={true}
                    className="border-0 border-b-2 px-0 py-3 z-0 bg-transparent w-full border-b-blue150 focus:outline-none focus:shadow-none focus:border-0"
                  />
                </div>
              </form>
            </div>
            <div className="col-span-12 xl:col-span-6 bg-blue200 contact-blue px-14 pr-5 md:pr-80 py-10 pt-20">
              <div className="py-5">
                <h2 className="text-white text-xl font-bold py-2">
                  Headquaters
                </h2>
                <p className="text-white text-sm">
                  Sysntax Root 12121 6th avenu, Fl 12 new york
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-white text-xl font-bold py-2">
                  California Office
                </h2>
                <p className="text-white text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-white text-xl font-bold py-2">
                  Give us a call
                </h2>
                <p className="text-white text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-white text-xl font-bold py-2">
                  General inquries
                </h2>
                <p className="text-white text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-white text-xl font-bold py-2">
                  Headquaters
                </h2>
                <p className="text-white text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
              <div className="py-5">
                <h2 className="text-white text-xl font-bold py-2">Careers</h2>
                <p className="text-white text-sm">
                  Developing and providing web and mobile software + apps for
                  clients throughout the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
