import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './themes/theme';
import MovieList from './containers/MovieList';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar/>
        <MovieList/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
