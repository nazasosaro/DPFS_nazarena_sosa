import React from "react";

const LastCreated = ({ item }) => {
  if (!item) return null;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-2">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Último producto creado
      </h2>
      <div className="flex items-center gap-4">
        <img
          src={`http://localhost:3000/images/products/${item.image}`}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-md font-bold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LastCreated;
