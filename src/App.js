import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";
import { store } from "./redux/store";
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
import Layout from "./layout/Layout";
import Vendor from "./pages/Vendor";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <div className="main">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/user/:id" element={<UpdateUser />} />
                <Route path="/user" element={<User />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/vendor" element={<Vendor />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
