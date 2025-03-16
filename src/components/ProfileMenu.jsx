import { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  ListItemIcon,
  Divider,
  Paper,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import {
  AccountCircle,
  Bookmark,
  Description,
  BarChart,
  Settings,
  Star,
  Logout,
} from "@mui/icons-material";

const ProfileMenu = () => {
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <Avatar sx={{ bgcolor: "green" }}>A</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            width: 220, // Increase width
            borderRadius: 2,
            mt: 1,
            overflow: "hidden",
          },
        }}
      >
        <Paper sx={{ p: 1 }}>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <Bookmark fontSize="small" />
            </ListItemIcon>
            Library
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <Description fontSize="small" />
            </ListItemIcon>
            Stories
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <BarChart fontSize="small" />
            </ListItemIcon>
            Stats
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <Star fontSize="small" sx={{ color: "#FFC107" }} />
            </ListItemIcon>
            Become a Member
          </MenuItem>

          <Divider />

          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Log Out
          </MenuItem>
        </Paper>
      </Menu>
    </>
  );
};

export default ProfileMenu;
