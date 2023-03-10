import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { BlueArrow, ITBanner, ITImg } from "../../assets";
import { Header } from "../../components";

const ITConsultion = () => {
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
            <div className="w-full py-2 flex justify-end">
              <img src={ITBanner} className="w-12/12 md:w-10/12" />
            </div>
          </div>
        </div>
        <div className="bg-blue200 h-96 my-36 blueBG mb-64">
          <div className="mainContainer">
            <div className="grid grid-cols-12 gap-y-8 gap-x-34 items-center">
              <div className="col-span-12 lg:col-span-5 w-12/12">
                <h3 className="text-xl lg:text-3xl pt-24 font-bold px-5">
                  Talk to our expert
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-56 mt-10 pb-5 px-5">
                  Syntax Root's free IT consultation allows you to get a better
                  idea of your IT needs and the technologies you depend on most.
                  Through an initial conversation with our representative,
                  you'll get the understanding of your IT need after talking to
                  our expert.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-end">
                <img src={ITImg} className="w-12/12 md:w-10/12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITConsultion;
