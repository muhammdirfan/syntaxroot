import { Button } from "flowbite-react";
import React from "react";
import {
  Appoarch,
  Banner2,
  BlueArrow,
  CareerBanner,
  ContactBanner,
  ContactBg,
  ITImg,
  Mission,
  Vision,
} from "../../assets";
import { Header, ServiceCard } from "../../components";

const servicesData = [
  {
    id: "001",
    image: Appoarch,
    serviceTitle: "Our Approach",
    sercviceDetail:
      "We believe that technology has the power to transform businesses and change the world for the better. That's why we are passionate about what we do and dedicated to making a positive impact through our work.",
  },
  {
    id: "002",
    image: Mission,
    serviceTitle: "Our Mission",
    sercviceDetail:
      "Our mission is to empower businesses and organizations to thrive in the digital age by providing them with innovative and customized technology solutions. We believe that technology has the power to transform the way companies operate and communicate.",
  },
  {
    id: "003",
    image: Vision,
    serviceTitle: "Our Vision",
    sercviceDetail:
      "Our vision is to be a leading provider of innovative technology solutions that help businesses and organizations. We believe that technology can be a powerful force for positive change, and we are committed to using it to create a better future for our clients.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="banner bg-gray200">
        <div className="mainContainer pt-40 pb-10">
          <div className="grid grid-cols-12 gap-8 pr-4 items-center">
            <div className="col-span-12 lg:col-span-6 pr-0 lg:pr-4">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 w-12/12 xl:w-10/12">
                A little about us
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-10/12">
                Our company was founded in 2016 with the mission to help our
                clients succeed by providing them with the latest and most
                advanced technology available. We specialize in a wide range of
                IT services, including software development, web development,
                mobile app development, product design, IT Consultation, quality
                assurance and helping clients choosing them right platform to
                build their product.
              </p>
              <Button
                outline={false}
                pill={true}
                style={{
                  border: "1px solid #174781",
                  backgroundColor: "#fff",
                  padding: "0px",
                }}
                className="bg-white shadow-none outline-line"
              >
                <div className="flex justify-between px-0">
                  <span className="text-blue50 text-md pr-5">Let’s begin</span>
                  <img src={BlueArrow} />
                </div>
              </Button>
            </div>
            <div className="col-span-12 lg:col-span-6 py-2 flex justify-center">
              <img src={ContactBanner} className="w-12/12 md:w-10/12" />
            </div>
          </div>
        </div>

        <div className="bg-blue200 h-96 my-36 blueBG mb-64">
          <div className="mainContainer">
            <div className="grid grid-cols-12 gap-y-8 gap-x-34 items-center">
              <div className="col-span-12 lg:col-span-5 w-12/12">
                <h3 className="text-xl lg:text-3xl pt-24 font-bold px-5">
                  Our Company
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-56 mt-10 pb-5 px-5">
                  At Syntaxroot, we pride ourselves on our commitment to
                  quality, reliability, and customer satisfaction. We are
                  dedicated to delivering solutions that are not only innovative
                  but also scalable and secure. We understand the importance of
                  staying up-to-date with the latest technologies and best
                  practices, and we continually invest in our team's training
                  and development to ensure that we are always delivering
                  cutting-edge solutions to our clients.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-end">
                <img src={ContactBg} className="w-12/12 md:w-10/12" />
              </div>
            </div>
          </div>
        </div>
        <div className="mainContainer pb-20">
          <div className="grid grid-cols-12 gap-5 xl:gap-8 py-5">
            {servicesData.map((item) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4"
                key={item.id}
              >
                <ServiceCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
