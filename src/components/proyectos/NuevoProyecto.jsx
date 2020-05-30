import React, { Fragment, useState, useContext } from "react";

const NuevoProyecto = () => {

  // State para Proyecto- libreria para un auto id
  const [proyecto, guardarProyecto] = useState({
    nombre: ""
  });

   // Extraer nombre de proyecto
   const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

   // Cuando el usuario envia un proyecto
   const onSubmitProyecto = e => {
    e.preventDefault();

    // Validar el proyecto
    if(nombre === '') {
      
    }

    // agregar al state
   // agregarProyecto(proyecto)

    // Reiniciar el form
    guardarProyecto({
        nombre: ''
    })
}


  const onClickFormulario = () => {};

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
     

    
    </Fragment>
  );
};

export default NuevoProyecto;
