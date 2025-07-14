import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-2 overflow-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Listado de productos
      </h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id} className="border-b">
              <td className="px-4 py-2">{prod.id}</td>
              <td className="px-4 py-2">{prod.name}</td>
              <td className="px-4 py-2">{prod.description}</td>
              <td className="px-4 py-2">
                {prod.category ? prod.category.name : "Sin categoría"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
