import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import LastCreated from "../components/LastCreated";
import CategoryPanel from "../components/CategoryPanel";
import ProductTable from "../components/ProductTable";
import { fetchDashboardData } from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboardData().then(setData);
  }, []);

  if (!data) return <p>Cargando dashboard...</p>;

  return (
    <div className="dashboard">
      <div className="cards-container">
        <Card title="Total de productos" value={data.totalProducts} />
        <Card title="Total de usuarios" value={data.totalUsers} />
        <Card title="Total de categorías" value={data.totalCategories} />
      </div>

      <LastCreated item={data.lastProduct} />
      <CategoryPanel categories={data.countByCategory} />
      <ProductTable products={data.products} />
    </div>
  );
};

export default Dashboard;
