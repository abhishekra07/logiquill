import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Avatar,
  Box,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Container,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import {
  Search,
  Notifications,
  Edit,
  MoreHoriz,
  BookmarkBorder,
  Add,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";
import PostCard from "../components/PostCard";

// Sample Categories & Posts
const categories = [
  "For you",
  "Following",
  "Featured",
  "Data Science",
  "Technology",
  "Programming",
  "AI",
  "Web Dev",
  "Machine Learning",
  "Cybersecurity",
];

const posts = [
  {
    title: "10 Java Tricks That Will Make You a Coding Rockstar",
    image: "images/java.png",
    description:
      "My articles are open to everyone; non-member readers can read the full article by clicking this link.",
    date: "Dec 13, 2024",
    likes: 785,
    comments: 10,
  },
  {
    title: "Extracting Semantic Model Size from Fabric Metrics",
    image: "images/AI.jpeg",
    description:
      "Using SemPy and Fabric Notebooks to extract semantic model memory usage for the entire Power BI tenant.",
    date: "Dec 10, 2024",
    likes: 560,
    comments: 7,
  },
  {
    title: "Extracting Semantic Model Size from Fabric Metrics",
    image: "images/AI.jpeg",
    description:
      "Using SemPy and Fabric Notebooks to extract semantic model memory usage for the entire Power BI tenant.",
    date: "Dec 10, 2024",
    likes: 560,
    comments: 7,
  },
  {
    title: "Extracting Semantic Model Size from Fabric Metrics",
    image: "images/AI.jpeg",
    description:
      "Using SemPy and Fabric Notebooks to extract semantic model memory usage for the entire Power BI tenant.",
    date: "Dec 10, 2024",
    likes: 560,
    comments: 7,
  },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const categoryRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true); // Initially, show right arrow

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Scrolls the category list horizontally
  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = 150; // Adjust scroll amount
      categoryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Delay state update to reflect after scrolling
      setTimeout(() => {
        setShowLeftArrow(categoryRef.current.scrollLeft > 0);
        setShowRightArrow(
          categoryRef.current.scrollLeft + categoryRef.current.clientWidth <
            categoryRef.current.scrollWidth
        );
      }, 300);
    }
  };

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
            <Button startIcon={<Edit />} variant="contained" color="primary">
              Write
            </Button>
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton onClick={handleMenuOpen}>
              <Avatar sx={{ bgcolor: "green" }}>A</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Dropdown */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Library</MenuItem>
        <MenuItem onClick={handleMenuClose}>Stories</MenuItem>
        <MenuItem onClick={handleMenuClose}>Stats</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={logout}>Log Out</MenuItem>
      </Menu>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {/* Left Side - Categories & Posts */}
          <Grid item xs={8}>
            <Paper
              sx={{
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              {showLeftArrow && (
                <IconButton
                  sx={{ position: "absolute", left: 0, zIndex: 1 }}
                  onClick={() => scrollCategories("left")}
                >
                  <ChevronLeft />
                </IconButton>
              )}
              <Box
                ref={categoryRef}
                sx={{
                  display: "flex",
                  overflowX: "hidden",
                  gap: 1,
                  pb: 1,
                  whiteSpace: "nowrap",
                  flex: 1,
                  scrollBehavior: "smooth",
                }}
              >
                <IconButton>
                  <Add />
                </IconButton>
                {categories.map((category, index) => (
                  <Chip
                    key={index}
                    label={category}
                    sx={{ cursor: "pointer" }}
                  />
                ))}
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Box>
              {showRightArrow && (
                <IconButton
                  sx={{ position: "absolute", right: 0, zIndex: 1 }}
                  onClick={() => scrollCategories("right")}
                >
                  <ChevronRight />
                </IconButton>
              )}
            </Paper>

            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </Grid>

          {/* Right Side - Staff Picks */}
          <Grid item xs={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Staff Picks
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                The highly specialized wisdom of “what if”
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
