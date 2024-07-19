import React from "react";
import Carousel from 'react-bootstrap/Carousel';


import foto from './img/foto.jpg'
import jura0 from './img/jura0.jpeg'
import jura2 from './img/jura2.jpg'
import jura1 from'./img/jura1.jpg'
import consejo from './img/consejo.jpeg'

import cv from './pdf/CV PAYO PILAR 2024.pdf'


function DarkVariantExample() {
  return (
    <Carousel className="carrousel" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jura0} 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jura2} 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jura1} 
          alt="Third slide"
        />
      </Carousel.Item><Carousel.Item>
        <img
          className="d-block w-100"
          src={consejo} 
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}


const SobreMi = () => {
  return (
    <section id="sobremi">
      <div className="contenedor-foto">
        <img src={foto} alt="Foto de perfil" />
      </div>
    <div className="container">
      <div className="sobremi">
        <p className="titulo-seccion">Sobre Mi</p>
        <h1>Hola, soy Pilar Payo</h1>
        <p>
          Tengo 23 años y estoy recibida de la carrera de Contador Público
          (UBA)
        </p>
        <p>
          A lo largo de mi carrera laboral tuve experiencias en diferentes
          rubros y empresas, comenzando en ABB en una pasantía como Customer
          Support Intern, continuando en Colorvision (Orlando – USA) como J1
          trabajando en el sector de ventas, y hoy en día en PWC,
          desempeñándome como Tax Indirect Junior trabajando con clientes de
          US.
        </p>
        <p>
          Me gustaría seguir explorando otras áreas comerciales como
          tecnológicas, así como también continuar desarrollando mi inglés y
          poder aplicarlo en el día a día.
        </p>
        <DarkVariantExample/>
        <br/>
        <button className="download-cv">
          <a
            href= {cv} target="_blank" rel="noopener noreferrer" download="CV PAYO PILAR 2024"
          >
            Descargar CV
          </a>
        </button>
      </div></div>
    </section>
  );
};

export default SobreMi;