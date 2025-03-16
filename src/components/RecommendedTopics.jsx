import { Box, Typography, Chip, Link } from "@mui/material";

const topics = [
  "Self Improvement",
  "Machine Learning",
  "Writing",
  "Relationships",
  "Politics",
  "Cryptocurrency",
  "Productivity",
];

const RecommendedTopics = () => {
  return (
    <Box sx={{ mb: 3, mt: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Recommended topics
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {topics.map((topic, index) => (
          <Chip
            key={index}
            label={topic}
            sx={{ cursor: "pointer", borderRadius: "16px" }}
            clickable
          />
        ))}
      </Box>

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
        See more topics
      </Link>
    </Box>
  );
};

export default RecommendedTopics;
