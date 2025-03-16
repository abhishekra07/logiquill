import { Box, Typography } from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

const ReadingList = () => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Reading list
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        Click the{" "}
        <BookmarkAddOutlinedIcon
          sx={{ fontSize: 16, verticalAlign: "middle" }}
        />{" "}
        on any story to easily add it to your reading list or a custom list that
        you can share.
      </Typography>
    </Box>
  );
};

export default ReadingList;
