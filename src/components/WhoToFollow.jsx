import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const users = [
  { name: "Alice Johnson", tech: "Web Dev" },
  { name: "John Doe", tech: "AI Researcher" },
  { name: "Emma Smith", tech: "Blockchain Enthusiast" },
];

const WhoToFollow = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Who to Follow
      </Typography>
      <List>
        {users.map((user, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{user.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.tech} />
            <Button variant="outlined" size="small">
              Follow
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WhoToFollow;
