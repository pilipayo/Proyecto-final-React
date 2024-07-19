import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Inicio from './Inicio';
import SobreMi from './SobreMi';
import Contacto from './Contacto';
import Footer from './Footer';
import Button from './Button.js';

function App() {
  const company = "curriculum vitae";
  const year = new Date().getFullYear();
  
  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Button/>
      <Contacto />
      <Footer company={company} year={year} /> 
    </div>
  );
}

export default App;