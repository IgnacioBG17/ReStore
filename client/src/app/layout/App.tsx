import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
import Header from './Header';


function App() {

    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? 'dark' : 'light';

    const theme = createTheme({
        palette: {
          mode: paletteType,
          background: {
              default: paletteType === 'light' ? '#eaeaea' : '#121212'
          }
        },
    });

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    }
    
    return (
       
        <ThemeProvider theme={theme}>
             <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
           
            <Container>
                   
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/catalog' component={Catalog}/>
                <Route exact path='/catalog/:id' component={ProductDetails}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/contact' component={ContactPage}/>     
            </Container>
        </ThemeProvider>
    );
}

export default App;
