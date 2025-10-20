import React from "react";

const Card = ({ title, value, color = "gray" }) => {
  const colorMap = {
    gray: "bg-gray-100 text-gray-800",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    red: "bg-red-100 text-red-600",
    blue: "bg-blue-100 text-blue-600",
  };
  return (
    <div className={`p-4 rounded shadow flex flex-col ${colorMap[color]}`}>
      <span className="text-gray-500">{title}</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
};

export default Card;
