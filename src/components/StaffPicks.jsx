import { Box, Typography, Avatar, Link, Tooltip } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const staffPicks = [
  {
    id: 1,
    publication: "The Medium Blog",
    author: "The Medium Newsletter",
    title:
      "The highly specific, yet oddly relatable wisdom of “what I wish I knew”",
    timeAgo: "2d ago",
    logo: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual image path,
    isMemberOnly: true,
  },
  {
    id: 2,
    publication: "Steven Gambardella",
    author: "",
    title: "What it’s like to have a child",
    timeAgo: "Mar 6",
    logo: "https://via.placeholder.com/40/000000/FFFFFF/?text=I", // Replace with actual image path
    isMemberOnly: false,
  },
  {
    id: 3,
    publication: "Counter Arts",
    author: "Cole Haddon",
    title: "In the Writers’ Room Where It Happened: ‘Twin Peaks’",
    timeAgo: "6d ago",
    logo: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image path
    isMemberOnly: true,
  },
];

const StaffPicks = () => {
  const truncateString = (str, maxLength = 10) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Staff Picks
      </Typography>
      {staffPicks.map((pick) => (
        <Box
          key={pick.id}
          sx={{ display: "flex", flexDirection: "column", mb: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <Avatar src={pick.logo} sx={{ width: 24, height: 24, mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {truncateString(pick.publication, 10)}
            </Typography>
            {pick.author && (
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                by {truncateString(pick.author, 10)}
              </Typography>
            )}
          </Box>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 0.5 }}>
            {truncateString(pick.title, 50)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {pick.isMemberOnly && (
              <Tooltip title="Members only" arrow>
                <StarRateIcon
                  sx={{
                    fontSize: "12px",
                    color: "#ffc017",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            )}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ ml: 0.5 }}
            >
              {pick.timeAgo}
            </Typography>
          </Typography>
        </Box>
      ))}
      <Link
        href="#"
        underline="hover"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        See the full list
      </Link>
    </Box>
  );
};

export default StaffPicks;
