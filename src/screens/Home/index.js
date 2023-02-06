import { Button, Carousel } from "flowbite-react";
import React from "react";
import {
  Banner1,
  Bar,
  BarImg,
  ITConsulting,
  Mobileapp,
  Plateform,
  Product,
  Quality,
  ServiceDetail,
  Webdev,
  WhiteBar,
  Android,
  Apple,
  AWS,
  AWSLambda,
  Azure,
  CSSLogo,
  Express,
  Figma,
  Google,
  Java,
  JavaScript,
  Magento,
  Mongodb,
  Postgre,
  ReactLogo,
  Spring,
  XDLogo,
  HTMLlogo,
  Node,
  Photoshop,
  LeftGrid,
  RightGrid,
  BlackBar,
  Fintech,
  Education,
  Healthcare,
  Logistics,
  Ellipse11,
  Ellipse12,
  Ellipse13,
  ArrowRight,
  BlueArrow,
  ArrowWhite,
  ArrowLeft,
} from "../../assets";
import {
  Header,
  IndustryCard,
  ServiceCard,
  Testmonails,
} from "../../components";
import "../../CustomStyles/index.css";

const servicesData = [
  {
    id: "001",
    image: Mobileapp,
    serviceTitle: "Mobile app development",
    sercviceDetail:
      "Creative design and development of mobile app for every business can generate extremely good results, brand loyalty and dependable user retention. We work closely with our clients to create user friendly yet smartly functional apps",
  },
  {
    id: "002",
    image: Webdev,
    serviceTitle: "Web development",
    sercviceDetail:
      "Syntax Root is  offering creative Web designing for all kind of businesses. We are master of providing flexible delivery models of websites, as one of the leading web development company.",
  },
  {
    id: "003",
    image: Product,
    serviceTitle: "Product design",
    sercviceDetail:
      "Our team consist of capable designers who have spent years designing delightful and usable products. Whether you need a new UI or a upgradation on an existing product design.",
  },
  {
    id: "004",
    image: Quality,
    serviceTitle: "Quality Assurance",
    sercviceDetail:
      "We maintain desired level of quality in a service or product, especially by means of attention to every stage of the process of delivery or production.",
  },
  {
    id: "005",
    image: ITConsulting,
    serviceTitle: "IT consulting",
    sercviceDetail:
      "Our free consultancy department help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies.",
  },
  {
    id: "006",
    image: Plateform,
    serviceTitle: "Platform selection",
    sercviceDetail:
      "Platform selection is no simple task. As technology capabilities are increasing, We help to ensure to choose the right technology for the the production of your innovation or vision. We also help to select the best ‘fitʼ and reduce technology investment risks.",
  },
];

const brands = [
  Magento,
  ReactLogo,
  Apple,
  Postgre,
  HTMLlogo,
  Photoshop,
  Node,
  Mongodb,
  Azure,
  JavaScript,
  Android,
  XDLogo,
  AWS,
  CSSLogo,
  Spring,
  Java,
  Figma,
  AWSLambda,
  Google,
  Express,
];

const Industries = [
  {
    id: "0001",
    image: Fintech,
    name: "Fintech",
  },
  {
    id: "0002",
    image: Education,
    name: "Education",
  },
  {
    id: "0003",
    image: Healthcare,
    name: "Healthcare",
  },
  {
    id: "0004",
    image: Logistics,
    name: "Logistics",
  },
];

const testmonails = [
  {
    id: "001",
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    clientImage: Ellipse11,
    clientName: "Savannah Nguyen",
    clientDest: "Digital Marketing Director",
  },
  {
    id: "002",
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    clientImage: Ellipse12,
    clientName: "Wade Warren",
    clientDest: "Digital Marketing Director",
  },
  {
    id: "003",
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    clientImage: Ellipse13,
    clientName: "Jerome Bell",
    clientDest: "Digital Marketing Director",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="container mx-auto px-5 md:px-2 lg:px-18 xl:px-36 pt-40 pb-10">
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-4">
              <h2 className="text-3xl md:text-5xl font-bold font-libre">
                The Right Step
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-3 font-libre">
                We help businesses to grow all across the globe. We meet our
                clients, align with their ideas, and work with them to create an
                impact on the globe.
              </p>
              <Button
                //   color="blue"
                outline={true}
                pill={true}
                className="border-1 border-blue50 bg-transparent"
              >
                <div className="flex justify-between px-0">
                  <span className="text-blue50 text-sm pr-8">Let’s begin</span>
                  <img src={BlueArrow} />
                </div>
              </Button>
            </div>
            <img src={Banner1} width="50%" />
          </div>
          <div className="py-5">
            <img src={Bar} />
            <h3 className="text-3xl font-bold py-2 font-libre">Our Services</h3>
            <div className="grid grid-cols-12 gap-5 py-5">
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
        <div className="service-detail flex items-center mb-10 py-20 pt-40 lg:pt-0">
          <img src={BarImg} width="50" className="ml-2 lg:ml-10 pt-36" />
          <div className="px-10 mx-2 lg:mx-14 md:px-24 lg:px-5">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6 flex items-center">
                <div className="w-8/12 md:w-11/12">
                  <img src={WhiteBar} />
                  <h3 className="text-white text-xl lg:text-4xl py-2 font-libre">
                    Working in IT services for the past decade
                  </h3>
                  <p className="text-white py-2 font-libre text-sm">
                    Developing and providing web and mobile software + apps for
                    clients throughout the globe.
                  </p>
                  <p className="text-white font-libre text-sm">
                    Syntax is providing full service software solutions to the
                    clients and customers, with a pool of latest tech-groomed
                    specialists working with the modern up to date tech stack.
                    We strive in providing solutions for enterprise use with
                    complete and customized execution. Our clients located
                    across the globe are reaping the benefits of our immaculate
                    services and maintenance throughout the year for any kind of
                    consultancy needed.
                  </p>
                  <Button
                    color="white"
                    className="bg-transparent pt-14 mx-0 px-0"
                  >
                    <div className="flex justify-between">
                      <span className="text-white text-xl px-0 pr-2 md:pr-3 lg:pr-4 mx-0">
                        Read more
                      </span>
                      <img src={ArrowWhite} />
                    </div>
                  </Button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 flex justify-center">
                <img src={ServiceDetail} className="pr-0 xl:pr-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 lg:px-24 py-10">
          <img src={Bar} />
          <h3 className="text-3xl font-bold py-2 font-libre">
            Technologies stack
          </h3>
          <div className="grid grid-cols-10 py-10 gap-x-8 md:gap-x-24 lg:gap-x-36 gap-y-16">
            {brands.map((item, index) => (
              <div
                key={index}
                className="col-span-5 sm:col-span-3 md:col-span-3 lg:col-span-2"
              >
                <img src={item} width="" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue100">
          <div className="container mx-auto pt-5 md:pt-0 lg:py-10">
            <img src={WhiteBar} />
            <h3 className="text-white text-xl lg:text-4xl py-2 font-libre">
              Our Work Flow
            </h3>
            <div className="complex my-20"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-0 lg:col-span-2">
            <img src={LeftGrid} className="h-full" />
          </div>
          <div className="col-span-12 px-10 md:px-2 lg:col-span-8 my-10 lg:my-auto w-12/12 container mx-auto">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-2 font-libre">Industries</h3>
            <p className="text-gray50 w-12/12 md:w-8/12 font-libre">
              Some of the major industry sectors that we have worked and
              provided solutions for are:
            </p>
            <div className="grid grid-cols-12 gap-10 py-8">
              {Industries.map((item) => (
                <div
                  key={item.id}
                  className="col-span-9 px-auto md:col-span-6 lg:col-span-3"
                >
                  <IndustryCard item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-0 lg:col-span-2 flex justify-end">
            <img src={RightGrid} className="h-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-10 xl:px-24 py-0 pt-5 md:pt-0 lg:py-16">
        <div className="">
          <img src={BlackBar} />
          <h3 className="text-3xl font-bold py-2 font-libre w-12/12 lg:w-6/12 xl:w-4/12">
            We love our Customers and They love us too
          </h3>
        </div>
        <div className="h-screen sm:h-64 md:h-screen lg:h-80 xl:h-80 2xl:h-96">
          <Carousel
            rightControl={
              <>
                <img
                  src={ArrowLeft}
                  className="border-2 border-gray300 bg-gray300 rounded-full p-1 absolute top-0 right-10"
                />
                <img
                  src={ArrowRight}
                  className="border-2 border-gray50 rounded-full p-1 absolute top-0 right-0"
                />
              </>
            }
            indicators={false}
            className="relative"
            slide={false}
          >
            <div className="grid grid-cols-12 gap-8 py-8">
              {testmonails.map((item) => (
                <div className="col-span-12 lg:col-span-4" key={item.id}>
                  <Testmonails item={item} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-8 py-8">
              {testmonails.map((item) => (
                <div className="col-span-12 lg:col-span-4" key={item.id}>
                  <Testmonails item={item} />
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
