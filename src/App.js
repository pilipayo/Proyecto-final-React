import React, { createContext, useState, useContext } from 'react';
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


// Creación del contexto
// const TemaContext = createContext();

// const TemaProvider = ({ children }) => {
//     const [tema, setTema] = useState('claro');
//     const cambiarTema = () => {
//         setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
//     };

//     return (
//         <TemaContext.Provider value={{ tema, cambiarTema }}>
//             {children}
//         </TemaContext.Provider>
//     );
// };

// const ModoOscuro = () => {
//     const { tema, cambiarTema } = useContext(TemaContext);

//     return (
//         <div style={{ background: tema === 'claro' ? '#fff' : '#333', color: tema === 'claro' ? '#000' : '#fff', padding: '20px' }}>
//             <p>El tema actual es: {tema}</p>
//             <button onClick={cambiarTema}>Cambiar Tema</button>
//         </div>
//     );
// };
