import React from 'react';
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes';

import { AuthProvider } from './hooks/auth';


// import { Details } from './pages/Details'
// import { SignUp } from './pages/SignUp'
// import { Home } from './pages/Home';
import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
   <>
      <React.StrictMode>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
               <Routes />
            </AuthProvider>
         </ThemeProvider>
      </React.StrictMode>
   </>,
)
