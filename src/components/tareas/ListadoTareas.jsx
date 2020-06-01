import React, { Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoTareas = () => {

    // Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    console.log('array proyecto elegido', proyecto)

    // obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] =  proyecto;
    console.log(' proyecto actual', proyectoActual)

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (
        <Fragment>
            <h2>Proyecto:  {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
            {tareasproyecto.length === 0 
                ? (<li className="tarea"><p>No hay tareas</p></li>) 
                : 
            <TransitionGroup>
            {tareasproyecto.map(tarea => (
                <CSSTransition
                    key={tarea._id}
                    timeout={500}
                    classNames="tarea"
                >
               
                <Tarea 
                        tarea={tarea}
                    />
                        
                </CSSTransition>
            ))}
            </TransitionGroup>
        }
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas
