import React, { Fragment, useState }  from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner';


function App() {
  
  // Definir el state y luego se lo pasamos al formulario. Siempre se hace del padre a los o el hijo
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  
  let componente;
  if(cargando) {
    componente = <Spinner />
  } else if(total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado 
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                 />
  }

  return (
    <Fragment>
      <Header 
        title="U International Bank"
      />
      <div className="container">
        <Formulario 
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        total={total}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
