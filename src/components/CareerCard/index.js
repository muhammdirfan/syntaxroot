import React from "react";

const CareerCard = ({ item, bgColor }) => {
  return (
    <div
      className={`${bgColor} text-center py-14 px-5 career-card`}
      style={{ boxShadow: "0px 20px 29px -14px rgba(40, 55, 74, 0.08)" }}
    >
      <h2 className="text-dark50 text-2xl mx-auto text-center py-2">
        {item.name}
      </h2>
      <p className="text-sm text-gray100">{item.para}</p>
    </div>
  );
};

export default CareerCard;
