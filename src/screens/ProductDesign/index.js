import { Button } from "flowbite-react";
import React from "react";
import {
  BlackBar,
  BlueArrow,
  LeftGrid,
  RightGrid,
  ServiceDetail,
  ProdDesignBanner,
  POC,
  UIdesign,
  UXdesign,
  Wireframse,
  WebDesign,
  MobAppDesign,
  MVP,
  Discovery,
  Planning,
  Execution,
  Validation,
} from "../../assets";
import { DevCycleCard, Header, IndustryCard } from "../../components";

const Industries = [
  {
    id: "0001",
    image: POC,
    name: "POC",
  },
  {
    id: "0002",
    image: UIdesign,
    name: "User Interface Design",
  },
  {
    id: "0003",
    image: UXdesign,
    name: "User Experience Design",
  },
  {
    id: "0004",
    image: Wireframse,
    name: "Wireframse & Prtotyping",
  },
  {
    id: "0005",
    image: WebDesign,
    name: "Web Design",
  },
  {
    id: "0006",
    image: MobAppDesign,
    name: "Mobile App Design",
  },
  {
    id: "0007",
    image: MVP,
    name: "MVP",
  },
];

const DevCyleData = [
  {
    id: "001",
    number: "1",
    image: Discovery,
    title: "Discovery",
    description:
      "Understanding Business Requirements Capturing (defining) User Personas Doing Market Research",
  },
  {
    id: "002",
    number: "2",
    image: Planning,
    title: "Planning",
    description: "Making a Design plan Creating Flowcharts Drawing Wireframes",
  },
  {
    id: "003",
    number: "3",
    image: Execution,
    title: "Execution",
    description:
      "Building a Style Guide Designing GUI Elements Rapid Prototyping",
  },
  {
    id: "004",
    number: "4",
    image: Validation,
    title: "Validation",
    description: "Testing Prototype Gathering User Feedback Iterations",
  },
];

const ProductDesign = () => {
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="container mx-auto px-5 md:px-24 pt-40 pb-10">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-4">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 w-12/12 xl:w-10/12">
                We design lovable products.
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-10/12">
                Our team consist of capable designers who have spent years
                designing delightful and usable products. Whether you need a new
                UI or a upgradation on an existing product design.
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
              <img src={ProdDesignBanner} width="80%" />
            </div>
          </div>
        </div>
        <div className="bg-blue200 h-96 my-36 blueBG">
          <div className="container mx-auto pl-5 md:pl-24">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-5 w-12/12 p-5">
                <h3 className="text-xl lg:text-3xl pt-5 font-bold pr-5">
                  Our extraordinary design expertise goes behind just aesthetics
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-56 mt-10 pb-5">
                  Pairing design and function, we ensure that your applications
                  look as impeccable as they operate. Seeing testing through on
                  every scale from start-to-finish, and at times, well beyond
                  when your application is launched, you can be ensured you’ll
                  have the best.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-center">
                <img src={ServiceDetail} width="80%" />
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
            <h3 className="text-3xl font-bold py-2 w-12/12 lg:w-4/12 ">
              Top product services we provide.
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
            <h3 className="text-3xl font-bold py-1 ">
              Steps involve in product design process
            </h3>
            <div className="grid grid-cols-12 gap-10 py-8 cycle mt-10 mx-auto">
              {DevCyleData.map((item) => (
                <div
                  className="col-span-9 sm:col-span-12 lg:col-span-6"
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

export default ProductDesign;
