import { useState, useCallback } from "react";
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
import { useAuth } from "../context/AuthContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image"],
  ["blockquote", "code-block"],
];

const NewStory = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Save draft automatically (Optional)
  const handleAutoSave = useCallback(() => {
    console.log("Auto-saving draft:", { title, body });
    // TODO: Implement auto-save logic
  }, [title, body]);

  const handlePublish = () => {
    console.log("Publishing Story:", { title, body });
    // TODO: Save story to the database
  };

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
              Draft in {user?.email?.split("@")[0] || "Unknown"}{" "}
              <span style={{ color: "gray" }}>Saved</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="contained" color="success" onClick={handlePublish}>
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
          onBlur={handleAutoSave}
          InputProps={{ sx: { fontSize: "2.5rem", fontWeight: "bold", p: 1 } }}
        />

        {/* Rich Text Editor for Story Body */}
        <Box sx={{ flex: 1, mt: 2, height: "60vh" }}>
          <ReactQuill
            theme="snow"
            value={body}
            onChange={setBody}
            placeholder="Write your story..."
            modules={{ toolbar: toolbarOptions }}
            style={{ height: "100%" }}
            onBlur={handleAutoSave}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NewStory;
