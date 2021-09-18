import React, { useState } from 'react'
import data from './data.json'
import Botones from './components/Botones'

export default function App() {

    let sonidos = [];
  
    const [volumen, setVolumen] = useState(1);
    const [selector, setSelector] = useState(false)

    if(selector === true){
        sonidos=data.bankTwo;
    }else{
        sonidos=data.bankOne;
    }

    return (<>

        <h2 className="container">Caja de Ritmos</h2>
        <br />
        {
            sonidos.map(sonido =>

                <Botones key={sonido.id} sonido={sonido} volumen={volumen} />

            )
        }

        <br />
        <br />

        <label htmlFor="customRange1" className="form-label container">Volumen</label>
        <input
            type="range"
            className="w-50 m-2"
            id="customRange1"
            step="0.01"
            max="1"
            min="0"
            onChange={(e) => setVolumen(e.target.value)}
            value={volumen}
        />

        <div className="form-check form-switch">
  
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={(e)=>setSelector(e.target.checked)}
                />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Cambiar Sonidos</label>
        </div>
    </>)
}
