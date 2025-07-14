import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full md:w-1/3 m-2">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default Card;
