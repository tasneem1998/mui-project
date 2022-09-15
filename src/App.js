import * as React from 'react';
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Stack direction="row" spacing={{xs: 0, sm: 2}} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
