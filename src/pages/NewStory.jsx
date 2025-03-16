import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  TextField,
  Container,
  IconButton,
  Avatar,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Get user info

const NewStory = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Navigation Bar */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ p: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              LogiQuill
            </Typography>
            <Typography variant="body1">
              Draft in {user?.email.substring(0, 6) || "Unknown"}{" "}
              <span style={{ color: "gray" }}>Saved</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="contained" color="success">
              Publish
            </Button>
            <IconButton onClick={() => navigate("/dashboard")}>
              <CloseIcon />
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <Avatar sx={{ bgcolor: "green" }}>A</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content Wrapper */}
      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          mt: 4,
          mb: 4,
          p: 3,
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        {/* Title Input */}
        <TextField
          variant="standard"
          fullWidth
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{ sx: { fontSize: "2.5rem", fontWeight: "bold", p: 1 } }}
        />

        {/* Body Input - Expands to full screen */}
        <Box sx={{ flex: 1, mt: 2 }}>
          <TextField
            variant="standard"
            fullWidth
            multiline
            placeholder="Write your story..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            InputProps={{
              disableUnderline: true,
              sx: { fontSize: "1.25rem", lineHeight: "1.6", p: 1 },
            }}
            sx={{
              width: "100%",
              minHeight: "60vh",
              "& textarea": { height: "100%" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NewStory;
