import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            LogiQuill
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit">Our Story</Button>
            <Button color="inherit">Membership</Button>
            <Button color="inherit">Write</Button>
            <Button color="inherit" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 17 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Share Your <span style={{ color: "#0096C7" }}>Stories</span> & Ideas
        </Typography>
        <Typography variant="h6" color="textSecondary">
          A place to read, write, and express your thoughts freely.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, borderRadius: "25px", px: 4 }}
          onClick={() => navigate("/signup")}
        >
          Start Writing
        </Button>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: 10, py: 2, textAlign: "center", bgcolor: "#f9f9f9" }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} LogiQuill • Privacy • Terms
        </Typography>
      </Box>
    </>
  );
};

export default Home;
