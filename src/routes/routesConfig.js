import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import NewStory from "../pages/NewStory";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const routesConfig = [
  // Public Routes
  {
    path: "/signin",
    component: Login,
    layout: PublicRoute, // Wrap with PublicRoute
  },
  {
    path: "/signup",
    component: SignUp,
    layout: PublicRoute, // Wrap with PublicRoute
  },

  // Protected Routes
  {
    path: "/dashboard",
    component: Dashboard,
    layout: ProtectedRoute, // Wrap with ProtectedRoute
  },
  {
    path: "/new-story",
    component: NewStory,
    layout: ProtectedRoute, // Wrap with ProtectedRoute
  },

  // General Route (No layout needed)
  {
    path: "/",
    component: Home,
  },
];

export default routesConfig;
