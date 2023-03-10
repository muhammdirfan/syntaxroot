import { Button, Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
    navigationLink: "app-development",
    sercviceDetail:
      "Creative design and development of mobile app for every business can generate extremely good results, brand loyalty and dependable user retention. We work closely with our clients to create user friendly yet smartly functional apps",
  },
  {
    id: "002",
    image: Webdev,
    serviceTitle: "Web development",
    navigationLink: "web-development",
    sercviceDetail:
      "Syntax Root is  offering creative Web designing for all kind of businesses. We are master of providing flexible delivery models of websites, as one of the leading web development company.",
  },
  {
    id: "003",
    image: Product,
    serviceTitle: "Product design",
    navigationLink: "product-design",
    sercviceDetail:
      "Our team consist of capable designers who have spent years designing delightful and usable products. Whether you need a new UI or a upgradation on an existing product design.",
  },
  {
    id: "004",
    image: Quality,
    serviceTitle: "Quality Assurance",
    navigationLink: "quality-assurance",
    sercviceDetail:
      "We maintain desired level of quality in a service or product, especially by means of attention to every stage of the process of delivery or production.",
  },
  {
    id: "005",
    image: ITConsulting,
    serviceTitle: "IT consulting",
    navigationLink: "IT-consultion",
    sercviceDetail:
      "Our free consultancy department help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies.",
  },
  {
    id: "006",
    image: Plateform,
    serviceTitle: "Platform selection",
    navigationLink: "platform-selection",
    sercviceDetail:
      "Platform selection is no simple task. As technology capabilities are increasing, We help to ensure to choose the right technology for the production of your innovation or vision. We also help to select the best ‘fitʼ and reduce technology investment risks.",
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="banner bg-gray200">
        <div className="mainContainer pt-40 pb-10">
          <div className="grid grid-cols-12 gap-8 pr-4 items-center">
            <div className="col-span-12 lg:col-span-6 pr-0 lg:pr-4">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold ">
                The Right Step
              </h2>
              <p className="text-gray50 pr-0 md:pr-10 lg:pr-4 mr-0 md:mr-16 lg:mr-5 py-5 w-12/12 xl:w-8/12">
                We help businesses to grow all across the globe. We meet our
                clients, align with their ideas, and work with them to create an
                impact on the globe.
              </p>
              <Link to="/contact-us">
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
                    <span className="text-blue50 text-md pr-5">
                      Let’s begin
                    </span>
                    <img src={BlueArrow} />
                  </div>
                </Button>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-end">
              <img src={Banner1} />
            </div>
          </div>
          <div className="py-5" id="our-services">
            <div className="py-2 lg:py-5">
              <img src={Bar} />
              <h3 className="text-3xl font-bold py-2 ">Our Services</h3>
            </div>
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
        <div className="service-detail flex items-center mb-10 pt-40 lg:pt-0">
          <img src={BarImg} width="50" className="ml-2 lg:ml-10 xl:ml-10" />
          <div className="mx-9 blueContainer">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6 flex items-center">
                <div className="w-8/12 sm:w-9/12 md:w-11/12">
                  <img src={WhiteBar} />
                  <h3 className="text-white text-xl lg:text-4xl py-2 ">
                    Working in IT services for the past decade
                  </h3>
                  <p className="text-white py-2  text-sm">
                    Developing and providing web and mobile software + apps for
                    clients throughout the globe.
                  </p>
                  <p className="text-white  text-sm">
                    Syntaxroot is providing full service software solutions to
                    the clients and customers, with a pool of latest
                    tech-groomed specialists working with the modern up to date
                    tech stack. We strive in providing solutions for enterprise
                    use with complete and customized execution. Our clients
                    located across the globe are reaping the benefits of our
                    immaculate services and maintenance throughout the year for
                    any kind of consultancy needed.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                <img src={ServiceDetail} className="pr-0 xl:pr-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="mainContainer py-14">
          <img src={Bar} />
          <h3 className="text-3xl font-bold py-2 ">Technologies stack</h3>
          <div className="grid grid-cols-10 py-10 gap-x-8 sm:gap-x-14 md:gap-x-28 lg:gap-x-24 xl:gap-x-32 gap-y-16">
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
        <div className="bg-blue100 py-5">
          <div className="mainContainer lg:py-5 xl:py-14">
            <img src={WhiteBar} />
            <h3 className="text-white text-xl lg:text-4xl py-2 ">
              Our Work Flow
            </h3>
            <div className="complex mt-5"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-0 lg:col-span-1 hidden lg:block">
            <img src={LeftGrid} className="h-full" />
          </div>
          <div className="col-span-12 lg:col-span-10 py-24 lg:my-auto w-12/12 container mx-auto">
            <img src={BlackBar} />
            <h3 className="text-3xl font-bold py-2 ">Industries</h3>
            <p className="text-gray50 w-12/12 md:w-8/12 ">
              Some of the major industry sectors that we have worked and
              provided solutions for are:
            </p>
            <div className="grid grid-cols-12 gap-10 py-8">
              {Industries.map((item) => (
                <div
                  key={item.id}
                  className="col-span-9 px-auto md:col-span-6 lg:col-span-3"
                >
                  <IndustryCard item={item} bgColor="bg-white" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-0 lg:col-span-1 hidden lg:flex justify-end">
            <img src={RightGrid} className="h-full" />
          </div>
        </div>
      </div>
      <div className="mainContainer pt-16 lg:py-16">
        <div className="">
          <img src={BlackBar} />
          <h3 className="text-3xl font-bold py-2  w-12/12 lg:w-6/12 xl:w-4/12">
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
