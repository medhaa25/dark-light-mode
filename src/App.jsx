import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const customTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          paddingTop: 4,
          width: "100vw",
        }}
      >
        <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ mb: 2 }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Paper
          elevation={5}
          sx={{
            padding: 4,
            maxWidth: 500,
            fontFamily: "inherit",
            borderRadius: "2rem",
          }}
        >
          <Box display="flex" gap={4}>
            <Avatar
              alt="John Doe"
              src="/path/to/image.jpg"
              sx={{ width: 80, height: 80 }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                John Doe
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ fontFamily: "inherit" }}
              >
                Frontend Developer
              </Typography>
              <Typography
                sx={{ fontFamily: "inherit" }}
                variant="body2"
                color="text.secondary"
                mt={1}
              >
                Passionate frontend developer with expertise in HTML, CSS,
                JavaScript, and React.
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-evenly" mt={3} ml={5}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                1999
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "inherit" }}
              >
                Followers
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                190
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "inherit" }}
              >
                Following
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                15
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "inherit" }}
              >
                Projects
              </Typography>
            </Box>
          </Box>

          <Stack spacing={2} direction="row" mt={3} justifyContent="center">
            <Button variant="contained" sx={{ fontFamily: "inherit" }}>
              Follow
            </Button>
            <Button variant="outlined" sx={{ fontFamily: "inherit" }}>
              View Profile
            </Button>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
