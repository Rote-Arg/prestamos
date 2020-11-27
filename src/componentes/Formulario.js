import React, {useState, Fragment} from 'react'
import {calcularTotal} from '../helper'
// le pasamos las props para modificarlas en el formulario
const Formulario = (props) => {
    
    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando} = props
    
    // Definir state para el error
    const [error, guardarError] = useState(false) 

    // Calcular prestamo con el submit

    const calcularPrestamo = (e) => { 
        e.preventDefault();

        // Validar
        if(cantidad === 0 || plazo === '') {
            guardarError(true)
            return
        }

        guardarError(false)

        // Habilitar Spinner
        guardarCargando(true)
        
        setTimeout(() => {
            // Realizar Cotizacion
            let total = calcularTotal(cantidad, plazo)
            guardarTotal(total)
            // Deshabilitar Spinner
            guardarCargando(false)
        }, 3000)
       
    }

    return(
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange={ (e) => { guardarCantidad( parseInt(e.target.value) ) } }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ (e) => { guardarPlazo( parseInt(e.target.value) ) } }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
            {(error) ?   <p className="error">Todos los Campos son Obligatorios</p>  : null}
        </Fragment>
    )
}

export default Formulario;