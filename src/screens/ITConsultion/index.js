import { Button } from "flowbite-react";
import React from "react";
import { BlueArrow, ITBanner, ITImg } from "../../assets";
import { Header } from "../../components";

const ITConsultion = () => {
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="container mx-auto px-5 md:px-24 pt-40 pb-10">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-4">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 w-12/12 xl:w-10/12">
                Free Consultation.
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-10/12">
                Our free consultancy department help clients assess different
                technology strategies and, in doing so, align their technology
                strategies with their business or process strategies.
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
              <img src={ITBanner} width="80%" />
            </div>
          </div>
        </div>
        <div className="bg-blue200 h-96 my-36 blueBG mb-52">
          <div className="container mx-auto pl-5 md:pl-24">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-5 w-12/12 p-5">
                <h3 className="text-xl lg:text-3xl pt-20 font-bold pr-5">
                  Talk to our expert
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-56 mt-10 pb-5">
                  Syntax Root's free IT consultation allows you to get a better
                  idea of your IT needs and the technologies you depend on most.
                  Through an initial conversation with our representative,
                  you'll get the understanding of your IT need after talking to
                  our expert.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-center">
                <img src={ITImg} width="80%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITConsultion;
