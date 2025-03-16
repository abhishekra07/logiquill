import { useRef, useState } from "react";
import { Box, Paper, IconButton, Chip } from "@mui/material";
import { ChevronLeft, ChevronRight, Add, MoreHoriz } from "@mui/icons-material";

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

const CategoryList = () => {
  const categoryRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
        <IconButton onClick={() => scrollCategories("left")}>
          <ChevronLeft />
        </IconButton>
      )}
      <Box
        ref={categoryRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          gap: 1,
          whiteSpace: "nowrap",
          flex: 1,
        }}
      >
        <IconButton>
          <Add />
        </IconButton>
        {categories.map((category, index) => (
          <Chip key={index} label={category} sx={{ cursor: "pointer" }} />
        ))}
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Box>
      {showRightArrow && (
        <IconButton onClick={() => scrollCategories("right")}>
          <ChevronRight />
        </IconButton>
      )}
    </Paper>
  );
};

export default CategoryList;
