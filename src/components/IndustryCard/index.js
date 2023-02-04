import React from "react";
import { Fintech } from "../../assets";

const IndustryCard = ({ item }) => {
  return (
    <div
      className="bg-white text-center py-8 rounded-lg"
      style={{ boxShadow: "0px 20px 29px -14px rgba(40, 55, 74, 0.08)" }}
    >
      <img src={item.image} className="mx-auto" />
      <h2 className="text-dark50 text-md font-libre">{item.name}</h2>
    </div>
  );
};

export default IndustryCard;
