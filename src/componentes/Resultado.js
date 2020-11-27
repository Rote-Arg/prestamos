import React from 'react'

const Resultado = ({cantidad, plazo, total}) => (
    <div className='u-full-width resultado'>
        <h2>Resumen</h2>

        <p>La cantidad Solicitada es ${cantidad}</p>
        <p>A Pagar en {plazo} Meses</p>
        <p>Su Pago Mensual es de ${(total/plazo).toFixed(2)}</p>
        <p>El Total a Pagar es ${(total).toFixed(2)}</p>

    </div>
)


export default Resultado;