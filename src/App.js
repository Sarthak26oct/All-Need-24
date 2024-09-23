import React, { useState } from "react";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { store } from "./redux/store";
import Header from "./components/Header";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <div className="main">
          <Router>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} />

            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
