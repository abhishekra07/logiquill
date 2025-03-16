import { Button, Stack } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const saveUserToBackend = async (user) => {
  try {
    const response = await fetch("https://your-backend-api.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        provider: user.providerData[0].providerId, // google.com or facebook.com
      }),
    });
    const data = await response.json();
    console.log("User saved to backend:", data);
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

const SocialLoginButtons = () => {
  const navigate = useNavigate();

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in user:", result.user);
      localStorage.setItem("user", JSON.stringify(result.user)); // Store user
      // Firebase will automatically update AuthContext
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <Stack spacing={2} mt={2}>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<FcGoogle />}
        onClick={() => handleSocialLogin(googleProvider)}
      >
        Continue with Google
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<FaFacebook color="#1877F2" />}
        onClick={() => handleSocialLogin(facebookProvider)}
      >
        Continue with Facebook
      </Button>
    </Stack>
  );
};

export default SocialLoginButtons;
