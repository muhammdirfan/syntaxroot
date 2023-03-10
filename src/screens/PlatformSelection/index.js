import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { BlueArrow, PlateFormBanner, PlateformImg } from "../../assets";
import { Header } from "../../components";

const PlatformSelection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="mainContainer pt-40 pb-10">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-4">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 w-12/12 xl:w-10/12">
                Choose the right platform for your business
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-10/12">
                Platform selection is no simple task. As technology capabilities
                are increasing, We help to ensure to choose the right technology
                for the the production of your innovation or vision. We also
                help to select the best fit and reduce technology investment
                risks.
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
            <div className="w-full py-2 flex justify-end">
              <img src={PlateFormBanner} className="w-12/12 md:w-10/12" />
            </div>
          </div>
        </div>
        <div className="bg-blue200 h-96 my-36 blueBG mb-64">
          <div className="mainContainer">
            <div className="grid grid-cols-12 gap-y-8 gap-x-34 items-center">
              <div className="col-span-12 lg:col-span-5 w-11/12">
                <h3 className="text-xl lg:text-3xl pt-20 font-bold px-5">
                  Take the right step towards success of your business
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-56 mt-10 pb-5 px-5">
                  It is always difficult to choose from plenty of options. But
                  no worries our technology experts have the right eye for your
                  business need to identify the right platform.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-end">
                <img src={PlateformImg} className="w-12/12 md:w-10/12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformSelection;
