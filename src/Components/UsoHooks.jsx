import React, { useState, useEffect } from 'react';
import  "../Style/style.css";
export default function UsoHooks() {
  const [usuario, setUsuario] = useState({
    Nombres: "",
    Apellidos: "",
    Email: "",
    Telefono: "",
    Direccion: "",
    Mensaje: "",
  });

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario({ ...usuario, [name]: value });
  };



  useEffect(() => {
    console.log(usuario)
  }, [usuario])


  return (
    <>
    
    <section className="form-register">
    <h2>Ponte en Contacto</h2>
    <div>
      <input onChange={handleChange} name="Nombres"  className= "controls" placeholder="Nombres" />
      </div>
      <div>
      <input onChange={handleChange} name="Apellidos" className= "controls" placeholder="Apellidos" />
      </div>
      <input onChange={handleChange} name="Email"  className= "controls" placeholder="Email" />
      <div>
      <input onChange={handleChange} name="Teléfono" className= "controls" placeholder="Teléfono" />
      </div>
      <input onChange={handleChange} name="Dirección"  className = "controls" placeholder="Dirección" />
      <div>
      <input
        onChange={handleChange}
        name="Mensaje" className="controls"
        placeholder="Escriba su mensaje aqui"
      />
      </div>
      <button className= "botons">Enviar </button>
      </section>
    </>
  );
}
