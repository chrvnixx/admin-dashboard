import { Route, Routes } from "react-router";
import "./App.css";
import OverviewPage from "./Pages/OverviewPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-sceen bg-gray-900 text-gray-100 overflow-hidden">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <Sidebar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
