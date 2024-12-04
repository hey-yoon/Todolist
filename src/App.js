import { RouterProvider } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import './App.css';
import router from './routes/router';
import theme from './global/theme';
import GlobalStyle from './global/global';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
