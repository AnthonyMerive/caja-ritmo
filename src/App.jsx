import React, { useState } from 'react'
import data from './data.json'
import Botones from './components/Botones'

export default function App() {

    const sonidos = data.bankOne;
    const [volumen, setVolumen] = useState(1);
    return (<>

    <h2 className="container">Caja de Ritmos</h2>
    <br />
        {
            sonidos.map(sonido =>

                <Botones key={sonido.id} sonido={sonido} volumen={volumen}/>

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
    </>)
}
