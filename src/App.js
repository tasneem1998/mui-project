import * as React from 'react';
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Stack from "@mui/material/Stack";
import CreatePost from './components/CreatePost';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  
  const [mode, setMode] = React.useState("light");

  const darkTheme=createTheme({
    palette:{
      mode: mode
    }
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Stack direction="row" spacing={{xs: 0, sm: 2}} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <CreatePost/>
    </ThemeProvider>
  );
}

export default App;
