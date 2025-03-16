import { Box, Typography, Paper, IconButton } from "@mui/material";
import {
  StarBorder as StarIcon,
  ChatBubbleOutline as CommentIcon,
  ThumbUpAltOutlined as LikeIcon,
  BookmarkBorder,
  MoreHoriz,
} from "@mui/icons-material";

const PostCard = ({ post }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        mb: 2,
        gap: 2,
        borderRadius: "10px",
        boxShadow: "none",
        border: "1px solid #ddd",
      }}
    >
      {/* Left - Post Details */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
          {post.description}
        </Typography>

        {/* Meta Information */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon fontSize="small" sx={{ color: "gold" }} />
            <Typography variant="caption" sx={{ color: "gray" }}>
              {post.date}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <LikeIcon fontSize="small" sx={{ color: "gray" }} />
            <Typography variant="caption" sx={{ color: "gray" }}>
              {post.likes}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CommentIcon fontSize="small" sx={{ color: "gray" }} />
            <Typography variant="caption" sx={{ color: "gray" }}>
              {post.comments}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right - Post Image */}
      <img
        src={post.image}
        alt="Post"
        style={{
          width: "100px",
          height: "80px",
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />

      {/* Actions */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton>
          <BookmarkBorder />
        </IconButton>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default PostCard;
