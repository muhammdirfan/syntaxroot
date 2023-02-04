import React from "react";
import { Qoutes } from "../../assets";

const Testmonails = ({ item }) => {
  return (
    <div className="">
      <img src={Qoutes} className="py-3" />
      <hr />
      <p className="text-lg text-dark50 font-libre py-2">{item.message}</p>
      <div className="flex items-center">
        <img src={item.clientImage} />
        <div className="pl-3">
          <p className="text-sm text-dark50 font-libre">{item.clientName}</p>
          <p className="text-sm text-gray100 font-libre">{item.clientDest}</p>
        </div>
      </div>
    </div>
  );
};

export default Testmonails;
