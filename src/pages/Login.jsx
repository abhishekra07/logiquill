import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      console.log("Login Success:", userCredential.user);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" color="primary">
          LogiQuill
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Sign in to your account
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>

      <SocialLoginButtons
        onSuccess={(user) => console.log("Social Login User:", user)}
      />

      <Typography align="center" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link onClick={() => navigate("/signup")} sx={{ cursor: "pointer" }}>
          Sign Up
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
