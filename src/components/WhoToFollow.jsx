import { Box, Typography, Avatar, Button, Link } from "@mui/material";

const usersToFollow = [
  {
    name: "Kiran Maan",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Web Developer ✦ MCA in Web Development",
    description: "Love to code and explore new technologies.",
  },
  {
    name: "ILLUMINATION",
    avatar: "https://via.placeholder.com/40/000000/FFFFFF/?text=I",
    role: "Publication",
    description: "We curate and disseminate outstanding articles from...",
  },
  {
    name: "Ignacio de Gregorio",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "AI Enthusiast",
    description: "I break down AI in easy-to-understand language for you...",
  },
];

const WhoToFollow = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Who to follow
      </Typography>

      {usersToFollow.map((user, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "0.95rem" }}>
                {user.name}
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "text.secondary" }}>
                {user.role}
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem", color: "text.secondary", mt: 0.5 }}
              >
                {user.description}
              </Typography>
            </Box>
          </Box>
          <Button variant="outlined" size="small" sx={{ borderRadius: "20px" }}>
            Follow
          </Button>
        </Box>
      ))}

      <Link
        href="#"
        underline="hover"
        sx={{
          display: "block",
          mt: 2,
          fontSize: "0.9rem",
          color: "text.secondary",
        }}
      >
        See more suggestions
      </Link>
    </Box>
  );
};

export default WhoToFollow;
