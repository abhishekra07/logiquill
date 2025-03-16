import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Box, CircularProgress } from "@mui/material";
import Home from "./pages/Home";
import NewStory from "./pages/NewStory";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Get loading state

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    ); // Show loading spinner while Firebase checks auth
  }

  return user ? children : <Navigate to="/" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/new-story" element={<NewStory />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
