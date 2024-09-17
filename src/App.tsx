import React from 'react';
import './App.css'
import AppProvider from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { KomodoraPresskit } from './pages/komodora_presskit/PressKit';

const  App = () =>{
  return(
    <AppProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<KomodoraPresskit/>}/>
          </Routes>
        </Router>
        
      </ThemeProvider>
    </AppProvider>
  )
};

export default App;
