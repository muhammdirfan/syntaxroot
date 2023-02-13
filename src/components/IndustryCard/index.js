import React from "react";

const IndustryCard = ({ item, bgColor }) => {
  return (
    <div
      className={`${bgColor} text-center py-8 rounded-lg h-48`}
      style={{ boxShadow: "0px 20px 29px -14px rgba(40, 55, 74, 0.08)" }}
    >
      <img src={item.image} className="mx-auto" />
      <h2 className="text-dark50 text-md w-5/12 lg:w-10/12 xl:w-6/12 mx-auto text-center">
        {item.name}
      </h2>
    </div>
  );
};

export default IndustryCard;
