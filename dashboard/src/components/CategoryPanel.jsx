import React from "react";

const CategoryPanel = ({ categories }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-2">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Productos por categoría
      </h2>
      <ul>
        {Object.entries(categories).map(([cat, count]) => (
          <li key={cat} className="flex justify-between py-1">
            <span>{cat}</span>
            <span className="font-bold text-blue-600">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
