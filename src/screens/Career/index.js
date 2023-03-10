import { Button } from "flowbite-react";
import React from "react";
import {
  AndroidIcon,
  AppSupportIcon,
  BlackBar,
  BlueArrow,
  CareerBanner,
  HybridIcon,
  IosIcon,
  LeftGrid,
  RightGrid,
} from "../../assets";
import { CareerCard, Header, IndustryCard } from "../../components";

const career = [
  {
    id: "0001",
    name: "Mobile app developer",
    para: "Send your resume @ Nadeem@syntaxroot.com",
  },
  {
    id: "0002",
    name: "Web developer",
    para: "Send your resume @ Nadeem@syntaxroot.com",
  },
  {
    id: "0003",
    name: "UI/UX Designer",
    para: "Send your resume @ Nadeem@syntaxroot.com",
  },
];

const Career = () => {
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="mainContainer pt-40 pb-10">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-4">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 w-12/12 xl:w-10/12">
                Build your career with us
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-11/12">
                We are a team of enthusiastic individuals working for the
                digital future and making impact on the globe.
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
            <div className="w-full flex justify-end">
              <img src={CareerBanner} className="w-12/12 md:w-10/12" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-60 px-5 md:px-0 bg-white">
          <div className="col-span-0 lg:col-span-1">
            <img src={LeftGrid} className="h-full" />
          </div>
          <div className="col-span-12 px-3 md:px-2 xl:px-0 lg:col-span-10 py-14 my-10 lg:my-auto w-12/12 container mx-auto">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-2 ">Current openings</h3>
            <div className="grid grid-cols-12 gap-10 py-8">
              {career.map((item) => (
                <div
                  key={item.id}
                  className="col-span-9 px-auto md:col-span-6 lg:col-span-4"
                >
                  <CareerCard item={item} bgColor="bg-gray400" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-0 lg:col-span-1 flex justify-end">
            <img src={RightGrid} className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
