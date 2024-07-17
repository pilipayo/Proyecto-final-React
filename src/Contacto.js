import React from "react";
import { useState } from "react";

const Contacto = () =>{
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [errores, setErrores] = useState({})

    const manejarCambiosEnNombre = (event) => {
        setNombre(event.target.value)
    }
    const manejarCambiosEnCorreo = (event) => {
        setCorreo(event.target.value)
    }

    const validarFormulario =() => {
    const nuevosErrores = {}
    if(nombre.trim()===''){
        nuevosErrores.nombre = 'El nombre es obligatorio'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
        nuevosErrores.correo = 'El correo no es válido'
      }
      setErrores(nuevosErrores)
      return Object.keys(nuevosErrores).length === 0;
    
}
const manejarEnvioForm = (event) => {
    event.preventDefault()
    if (validarFormulario()) {
        console.log('Datos del formulario:', {nombre, correo})
    }}
    return(
        <section id="contacto">
        <p className="titulo-seccion">Contactame </p>
        <div className="contenedor-form">
        <form onSubmit={manejarEnvioForm}>
      <div className="fila mitad">
        {/* <label>Nombre:</label> */}
        <input
          type="text"
          value={nombre}
          onChange={manejarCambiosEnNombre}
          className="input-mitad"
          placeholder="Nombre Completo *"
        />
        {errores.nombre && <span style={{ color: 'red' }}>{errores.nombre}</span>}
      </div>
      <div className="fila mitad">
        {/* <label>Correo:</label> */}
        <input
          type="email"
          value={correo}
          onChange={manejarCambiosEnCorreo}
          className="input-mitad"
          placeholder="Dirección de Email *"
        />
        {errores.correo && <span style={{ color: 'red' }}>{errores.correo}</span>}
      </div>
        <div className="fila">
        <input type="text" placeholder="Tu Mensaje..." className="input-full"></input>
        </div>
      <button className="download-cv" type="submit">Enviar mensaje</button>
    </form>
    </div>
    </section>
    )

//     return(
// <section id="contacto">
    
//         <p className="titulo-seccion">Contactame </p>
//         <div className="contenedor-form">
            
//                 <div className="fila mitad">
//                     <input type="text" placeholder="Nombre Completo *" className="input-mitad" />
//                     <input type="email" placeholder="Dirección de Email" className="input-mitad"/>
//                 </div>
               
//                 <div className="fila">
//                     <input type="text" placeholder="Tu Mensaje..." className="input-full"></input>
//                 </div>
//                 <button className="download-cv">Enviar Mensaje</button>
//         </div>
//     </section>
//     );
};

export default Contacto;
