import { Route, Routes } from "react-router";
import "./App.css";
import OverviewPage from "./Pages/OverviewPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* background */}

      <Sidebar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
