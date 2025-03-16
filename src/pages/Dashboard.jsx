import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
  InputBase,
  Container,
  Grid,
} from "@mui/material";
import { Search, Notifications, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";
import RightSidebar from "../components/RightSidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: "1px solid #ddd", px: 2 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              LogiQuill
            </Typography>
            <Box
              sx={{
                bgcolor: "#f5f5f5",
                px: 2,
                py: 1,
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search fontSize="small" sx={{ color: "gray", mr: 1 }} />
              <InputBase
                placeholder="Search"
                sx={{ fontSize: "14px", width: "100%" }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              startIcon={<Edit />}
              variant="contained"
              color="primary"
              onClick={() => navigate("/new-story")}
            >
              Write
            </Button>
            <IconButton>
              <Notifications />
            </IconButton>
            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {/* Left Side - Categories & Posts */}
          <Grid item xs={8}>
            <CategoryList />
            <PostList />
          </Grid>

          {/* Right Side - Staff Picks */}
          <Grid item xs={4}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
