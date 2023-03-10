import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import {
  BlackBar,
  BlueArrow,
  LeftGrid,
  RightGrid,
  Planning,
  Execution,
  QuailtyBanner,
  QuailtyImg,
  AutomationTesting,
  ManualTesting,
  CompTesting,
  PerfomanceTesting,
  SecurityTesting,
  QATeam,
  Assessment,
  Reporting,
} from "../../assets";
import { DevCycleCard, Header, IndustryCard } from "../../components";

const Industries = [
  {
    id: "0001",
    image: AutomationTesting,
    name: "Automation Testing",
  },
  {
    id: "0002",
    image: ManualTesting,
    name: "Manual Testing",
  },
  {
    id: "0003",
    image: CompTesting,
    name: "Compatibility Testing",
  },
  {
    id: "0004",
    image: PerfomanceTesting,
    name: "Perfomance Testing",
  },
  {
    id: "0005",
    image: SecurityTesting,
    name: "Security Testing",
  },
  {
    id: "0006",
    image: QATeam,
    name: "Dedicated QA Team",
  },
];

const DevCyleData = [
  {
    id: "001",
    number: "1",
    image: Assessment,
    title: "Assessment Phase",
    description:
      "Understanding Business Requirements Evaluation of Testing Requirements Tool and Technology Selection ",
  },
  {
    id: "002",
    number: "2",
    image: Planning,
    title: "Planning Phase",
    description:
      "Defining scope and Resources Preparing Test Cases Tool Installation and Configuration",
  },
  {
    id: "003",
    number: "3",
    image: Execution,
    title: "Execution Phase",
    description: "Test Case Execution Result Capturing",
  },
  {
    id: "004",
    number: "4",
    image: Reporting,
    title: "Reporting Phase",
    description:
      "Review & Analysis of Results Summarizing All the Findings Presenting And test Result",
  },
];

const QualityAssurance = () => {
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
                Let’s perfect your product.
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-4 w-12/12 xl:w-10/12">
                We maintain desired level of quality in a service or product,
                especially by means of attention to every stage of the process
                of delivery or production.
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
              <img src={QuailtyBanner} className="w-12/12 md:w-10/12" />
            </div>
          </div>
        </div>
        <div className="bg-blue200 h-96 my-36 blueBG">
          <div className="mainContainer">
            <div className="grid grid-cols-12 gap-y-8 gap-x-34 items-center">
              <div className="col-span-12 lg:col-span-5 w-12/12 md:10/12">
                <h3 className="text-xl lg:text-3xl pt-24 font-bold px-5">
                  Every stage of your development process is monitored
                  and validated.
                </h3>
                <p className="text-white text-sm bg-blue200 h-0 lg:h-52 mt-10 px-5 pb-5">
                  By employing unit testing, regression, integration, component,
                  system and end-to-end, we will ensure your application will be
                  operating defect-free. We streamline all sorts of testing
                  procedures to ensure your system is operating exactly as it
                  should.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 translate-y-20 lg:translate-y-16 flex justify-end">
                <img src={QuailtyImg} className="w-12/12 md:w-10/12" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-60 py-14 px-6 md:px-0 bg-white">
          <div className="col-span-0 lg:col-span-1">
            <img src={LeftGrid} className="h-full" />
          </div>
          <div className="col-span-12 px-10 md:px-0 lg:col-span-10 my-10 lg:my-auto w-12/12 container mx-auto">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-2 w-12/12 lg:w-5/12 ">
              Softwate QA testing service we provide.
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
          <div className="mainContainer">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-1 ">
              Our basic application testing process.
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

export default QualityAssurance;
