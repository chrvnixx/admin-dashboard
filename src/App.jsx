import { Route, Routes } from "react-router";
import "./App.css";
import OverviewPage from "./Pages/OverviewPage";
import Sidebar from "./components/common/Sidebar";
import ProductsPage from "./Pages/ProductsPage";
import UsersPage from "./Pages/UsersPage";
import SalesPage from "./Pages/SalesPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import SettingsPage from "./Pages/SettingsPage";
import OrdersPage from "./Pages/OrdersPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* background */}

      <Sidebar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
