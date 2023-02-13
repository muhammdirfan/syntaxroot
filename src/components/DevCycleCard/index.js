import React from "react";
import { Deployment } from "../../assets";

const DevCycleCard = ({ item }) => {
  return (
    <div className="bg-white px-8 py-5 rounded-2xl h-72 min-h-full">
      <div className="flex justify-between py-3">
        <img src={item.image} />
        <h2 className="text-4xl font-bold px-5 font-Roboto">{item.number}</h2>
      </div>
      <div className="py-5">
        <h3 className="text-lg text-dark50">{item.title}</h3>
        <p className="text-sm text-gray50 w-9/12 md:w-11/12 xl:w-10/12 leading-6">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default DevCycleCard;
