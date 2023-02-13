import { Button } from "flowbite-react";
import React from "react";
import {
  BlackBar,
  BlueArrow,
  LeftGrid,
  RightGrid,
  Deployment,
  Requirement,
  Engineering,
  QualityIcon,
  Webdevbanner,
  WebdevImg,
  UXUI,
  Architecture,
  Frontend,
  Backend,
  UnitTesting,
  Hosting,
} from "../../assets";
import { DevCycleCard, Header, IndustryCard } from "../../components";

const Industries = [
  {
    id: "0001",
    image: UXUI,
    name: "UI / UX",
  },
  {
    id: "0002",
    image: Architecture,
    name: "Architecture",
  },
  {
    id: "0003",
    image: Frontend,
    name: "Frontend",
  },
  {
    id: "0004",
    image: Backend,
    name: "Backend",
  },
  {
    id: "0005",
    image: UnitTesting,
    name: "Unit Testing",
  },
  {
    id: "0006",
    image: Hosting,
    name: "Deployment & Hosting",
  },
];

const DevCyleData = [
  {
    id: "001",
    number: "1",
    image: Requirement,
    title: "Requirement Identification",
    description:
      "We conduct meetings and gather requirements, We completely look into the  details and identify missing requirements.",
  },
  {
    id: "002",
    number: "2",
    image: Engineering,
    title: "Engineering",
    description:
      "Our team of engineers craft the interface and prototype and in the end, fulfill the client’s requirements.",
  },
  {
    id: "003",
    number: "3",
    image: QualityIcon,
    title: "Quality Assurance",
    description:
      "We test application and match the client’s requirements. Engineers will integrate the application, If client is satisfied, then will perform the debugging process.",
  },
  {
    id: "004",
    number: "4",
    image: Deployment,
    title: "Deployment",
    description:
      "After the final check up our team of experienced and talented developers , upload the quality work on servers, and make sure it is according to the plan.",
  },
];

const WebDev = () => {
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="container mx-auto px-5 md:px-24 pt-40 pb-10">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-4">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 w-12/12 xl:w-10/12">
                We digitize your business.
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-10/12">
                Syntax Root is offering creative Web designing for all kind of
                businesses. We are master of providing flexible delivery models
                of websites, as one of the leading web development company.
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
            <div className="w-full">
              <img src={Webdevbanner} width="80%" />
            </div>
          </div>
        </div>
        <div className="bg-blue200 h-96 my-36 blueBG">
          <div className="container mx-auto pl-5 md:pl-24">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-5 w-12/12 p-5">
                <h3 className="text-xl lg:text-3xl pt-5 font-bold">
                  Building the right solutions, using right tools
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-56 mt-10 pb-5">
                  At Syntax Root, we are always on top of using cutting-edge
                  tools to ensure your application(s) are optimized and
                  operating as they should.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-center">
                <img src={WebdevImg} width="80%" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-60 px-5 md:px-10 bg-white">
          <div className="col-span-0 lg:col-span-1">
            <img src={LeftGrid} className="h-full" />
          </div>
          <div className="col-span-12 px-10 md:px-2 py-14 lg:col-span-10 my-10 lg:my-auto w-12/12 container mx-auto">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-2 w-12/12 lg:w-6/12 ">
              Develop a professional web presence for your brand
            </h3>
            <p className="text-gray50 w-12/12 md:w-5/12 ">
              Some of the major industry sectors that we have worked and
              provided solutions for are:
            </p>
            <div className="grid grid-cols-12 gap-10 py-8">
              {Industries.map((item) => (
                <div
                  key={item.id}
                  className="col-span-9 px-auto md:col-span-6 lg:col-span-3"
                >
                  <IndustryCard item={item} bgColor="bg-gray400" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-0 lg:col-span-1 flex justify-end">
            <img src={RightGrid} className="h-full" />
          </div>
        </div>
        <div className="bg-gray200 py-16">
          <div className="container mx-auto px-5 md:px-24">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-2 ">Our Development Cycle</h3>
            <div className="grid grid-cols-12 gap-10 py-8 cycle mt-10 mx-auto">
              {DevCyleData.map((item) => (
                <div
                  className="col-span-9 sm:col-span-12 px-auto mx-auto lg:col-span-6"
                  key={item.id}
                >
                  <DevCycleCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDev;
