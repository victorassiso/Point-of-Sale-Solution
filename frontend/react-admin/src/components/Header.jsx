import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./style.css";

const Header = ({
  title,
  subtitle,
  game = null,
  subject = null,
  subjectTitle = "",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h2"
        color={[colors.blueAccent[400]]}
        fontWeight="bold"
        sx={{ mb: "5" }}
      >
        {title}
      </Typography>

      <Typography variant="h5" color={colors.grey[100]}>
        {subtitle}

        {game !== null ? (
          <span>
            <a href="/games">Games </a> {">"}
            <a href={`/games/subjects?gameType=${game}`}> {game} </a>
          </span>
        ) : (
          ""
        )}

        {subject !== null ? (
          <span>
            {">"}
            <a
              href={`/games/subjects/topics?gameType=${game}&subject=${subject}&subjectTitle=${subjectTitle}`}
            >
              {subjectTitle}
            </a>
          </span>
        ) : (
          ""
        )}
      </Typography>
    </Box>
  );
};

export default Header;
