import { Box } from "@mui/material";
import PostCard from "./PostCard"; // Reusing existing PostCard component

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

const PostList = () => {
  return (
    <Box>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
