import logo from './logo.svg';
import './App.css';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import CenterBody from './components/CenterBody';
import RightBody from './components/RightBody';
import { blue, purple, yellow } from '@mui/material/colors';
import CreatePost from './components/CreatePost';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    pallete: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={purple[500]} color={'#000000'}>
          <Header/>
          <Stack spacing={0} direction="row"
            justifyContent="space-between">
            <LeftBody/>
            <CenterBody/>
            <RightBody mode={mode} setMode={setMode}/>
          </Stack>
          <CreatePost/>
        </Box>
    </ThemeProvider>
  )
}

export default App;
