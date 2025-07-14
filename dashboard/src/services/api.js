import axios from "axios";

const API_BASE = "http://localhost:3000/api";

export const fetchDashboardData = async () => {
  const [productsRes, usersRes] = await Promise.all([
    axios.get(`${API_BASE}/products`),
    axios.get(`${API_BASE}/users`),
  ]);

  const lastProduct = productsRes.data.products.at(-1);

  return {
    totalProducts: productsRes.data.count,
    totalUsers: usersRes.data.count,
    totalCategories: Object.keys(productsRes.data.countByCategory).length,
    countByCategory: productsRes.data.countByCategory,
    lastProduct,
    products: productsRes.data.products,
  };
};
