import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes"; // Import the new routes file

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes /> {/* Use the extracted routes here */}
      </Router>
    </AuthProvider>
  );
}

export default App;
