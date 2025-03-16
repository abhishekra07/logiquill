import { Box } from "@mui/material";
import StaffPicks from "./StaffPicks";
import RecommendedTopics from "./RecommendedTopics";
import WhoToFollow from "./WhoToFollow";

const RightSidebar = () => {
  return (
    <Box sx={{ width: 300, p: 2 }}>
      <StaffPicks />
      <RecommendedTopics />
      <WhoToFollow />
    </Box>
  );
};

export default RightSidebar;
