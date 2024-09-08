import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import Sidebar from "./components/SideBar";
import LiveStatus from "./pages/LiveStatus";
import Devices from "./pages/Devices";
import Reports from "./pages/Reports";
import Help from "./pages/Help";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <DashBoard />
            </>
          }
        />
        <Route
          path="/liveStatus"
          element={
            <>
              <Sidebar />
              <LiveStatus />
            </>
          }
        />
        <Route
          path="/devices"
          element={
            <>
              <Sidebar />
              <Devices />
            </>
          }
        />
        <Route
          path="/reports"
          element={
            <>
              <Sidebar />
              <Reports />
            </>
          }
        />
        <Route
          path="/help"
          element={
            <>
              <Sidebar />
              <Help />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Sidebar />
              <Settings />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
