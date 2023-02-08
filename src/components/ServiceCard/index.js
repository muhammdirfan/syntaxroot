import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className="bg-white py-10 md:py-5 lg:py-10 px-2 xl:px-5 service-card">
      <img src={item.image} />
      <h2 className="text-dark text-2xl pt-5 font-libre">
        {item.serviceTitle}
      </h2>
      <p className="text-gray100 text-sm font-libre py-2">
        {item.sercviceDetail}
      </p>
    </div>
  );
};

export default ServiceCard;
