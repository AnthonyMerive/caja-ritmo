import React, { useEffect, useState } from 'react'

export default function Botones(props) {

    const [activo, setActivo] = useState(false)
    const volumen = props.volumen
    const sonido = props.sonido
 
    useEffect(() => {

        document.addEventListener('keydown', handleTecla)

        return () => {

            document.removeEventListener('keydown', handleTecla)
        
        }

    }, [volumen, sonido])

    const handleTecla = (e) =>{
        e.keyCode === props.sonido.keyCode &&
            handleReproducir();
            
 
    }
    
    const handleReproducir = () => {
        const rep = document.getElementById(props.sonido.keyTrigger);
        setActivo(true)
        rep.currentTime = 0;
        rep.volume = volumen;
        rep.play();
        setTimeout(()=> setActivo(false), 200);
    }


    return (<>
        <span onClick={handleReproducir} className={`btn btn-secondary m-md-4 m-sm-3 ${activo && 'btn-danger'}`}>
            <audio id={props.sonido.keyTrigger} src={props.sonido.url}></audio>
            {props.sonido.keyTrigger}
        </span>


    </>)
}
