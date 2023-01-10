import logo from './images/Logo-2.png';

import './AppCounter.css'
import './styles/Buttons.css'


import { Button } from './components/button';
import { Contador } from './components/Contador';
import { useState } from 'react';

export const AppCounter = ({ value }) => {

    const [contador, setContador] = useState(value)

      const SumarUnClic = () => {
      setContador( contador + 1 );
    }
  
    const RestarUnClic = () => {
      setContador( contador - 1 );
    }
  
    const reiniciarContador = () => {
      setContador( value );
    }

  return (
    <div className="App">
        <div className="freecodecamp-logo-contenedor">
        </div>
        <div className='contenedor-principal'>
          <Contador numcliClics={ contador }/>  
          <Button 
            texto="Sumar Click"
            esBotondeClick={true}
            manejarClic={SumarUnClic}
          />
          <Button 
            texto="Restar Clic"
            esBotondeClick={true}
            manejarClic={RestarUnClic}
          />
          <Button 
            texto="Reiniciar"
            esBotondeClick={false}
            manejarClic={reiniciarContador}
          />
        </div>
        
    </div>
  )
}


