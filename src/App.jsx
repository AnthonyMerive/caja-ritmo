import React, { useState } from 'react'
import data from './data.json'
import Botones from './components/Botones'

export default function App() {

    let sonidos = [];
    let bank = '';

    const [volumen, setVolumen] = useState(1);
    const [selector, setSelector] = useState(false);
    const [tecla, setTecla] = useState('');

    const volumenMostrar = Math.floor(volumen * 100);

    if (selector === true) {
        sonidos = data.bankTwo;
        bank = 'Banco #2'
    } else {
        sonidos = data.bankOne;
        bank = 'Banco #1'
    }

    return (<>

        <h2 className="container">Caja de Ritmos</h2>
        <br />
        {
            sonidos.map(sonido =>

                <Botones key={sonido.id} sonido={sonido} volumen={volumen} setTecla={setTecla} />

            )
        }

        <br />
        <br />

        <label htmlFor="customRange1" className="form-label container">
            {volumenMostrar === 0 ?
                <strong>Mute</strong>
                : <span> <strong>Volumen: </strong>
                    {volumenMostrar}%</span>}
        </label>
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

        <div className="form-check form-switch m-2">

            <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onChange={(e) => setSelector(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"><strong>{bank}: </strong>{tecla}</label>
        </div>
    </>)
}
