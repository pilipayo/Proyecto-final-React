import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

function Button() {
  /*Estado para mostrar u ocultar*/
  const [mostrarComponente, setMostrarComponente] = useState(false);
  return (
    <>
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button className="boton-mostrar" onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Ocultar` : `Mostrar más info`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && <Card>
      <Card.Header className="card-header">HERRAMIENTAS</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul className="lista" type="square">
            <li>Inglés avanzado</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>Paquete Office y similares</li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
        }
  <br></br>
      </div>
    </>
  );
}

export default Button;