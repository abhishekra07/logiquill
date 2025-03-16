import { Paper, Typography } from "@mui/material";

const StaffPicks = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" fontWeight="bold">
        Staff Picks
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        The highly specialized wisdom of “what if”
      </Typography>
    </Paper>
  );
};

export default StaffPicks;
