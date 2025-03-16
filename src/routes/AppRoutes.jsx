import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import NewStory from "../pages/NewStory";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes (Redirects logged-in users) */}
      <Route
        path="/signin"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />

      {/* Protected Routes (Requires authentication) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-story"
        element={
          <ProtectedRoute>
            <NewStory />
          </ProtectedRoute>
        }
      />

      {/* Home is accessible to everyone */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
