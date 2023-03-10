import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  return item.navigationLink ? (
    <Link to={`/${item.navigationLink}`}>
      <div className="bg-white py-5 md:py-5 lg:py-10 xl:py-8 px-5 md:px-3 xl:px-8 service-card ">
        <img src={item.image} />
        <h2 className="text-dark text-2xl md:text-xl xl:text-2xl pt-5  hover:cursor-pointer">
          {item.serviceTitle}
        </h2>
        <p className="text-gray100 text-sm  py-2 pr-3">{item.sercviceDetail}</p>
      </div>
    </Link>
  ) : (
    <div className="bg-white py-5 md:py-5 lg:py-10 xl:py-8 px-5 md:px-3 xl:px-8 service-card ">
      <img src={item.image} />
      <h2 className="text-dark text-2xl md:text-xl xl:text-2xl pt-5">
        {item.serviceTitle}
      </h2>
      <p className="text-gray100 text-sm  py-2 pr-3">{item.sercviceDetail}</p>
    </div>
  );
};

export default ServiceCard;
