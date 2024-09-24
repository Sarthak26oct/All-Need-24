import React, { useState } from "react";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { store } from "./redux/store";
import Header from "./components/Header";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import "./App.css";
import OrderHistory from "./pages/OrderHistory";
import User from "./pages/User";
import UpdateUser from "./pages/UpdateUser";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Provider store={store}>
      <div
        className={`app ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
      >
        <Router>
          <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <div className="main">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/user/:id" element={<UpdateUser />} />
              <Route path="/user" element={<User />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
