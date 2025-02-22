import React, {useEffect, useState} from 'react';
import "./estilos ACT2/App.css"
import IMCForm from "./IMCForm.jsx";
import ListarRegistros from "./ListarRegistros.jsx";
import {Graficos} from "./Graficos.jsx";
import {getData, storeData} from "./estilos ACT2/localStorage.js";

function App(props) {
    const [registros, setRegistros] = useState(getData('data'))
    const [prevRegistros, setPrevRegistros] = useState(null)

    if (registros === null){
        setRegistros([])
    }

    const manejaCambiar = valor => {
        guardarEstado()
        setRegistros([...registros, valor])
    }

    const manejaBorrar = valor => {
        guardarEstado()
        setRegistros(registros.filter(registro => registro.key !== valor));
    }

    const deshacer = () =>{
        setRegistros(prevRegistros)
    }

    const guardarEstado = () =>{
        setPrevRegistros(registros)
    }

    useEffect(() => {
        storeData('data', registros)
    }, [registros]);



    return (
        <div className='container'>
            <div className='row'>
                <h1>Calculaodra de Inidice de Masa Corporal</h1>
            </div>

            <div className='row'>
                <IMCForm cambiar={manejaCambiar}/>
            </div>

            <div className='row'>
                <h4>Datos de 7 dias</h4>
            </div>

            <div className='row data-container'>
                <ListarRegistros registros={registros} borrar={manejaBorrar}/>
            </div>

            <div className='row'>
                <button className='calculate-btn' onClick={deshacer}>Deshacer</button>
            </div>

            <div className='row'>
                <Graficos registros={registros} />
            </div>
        </div>
    );
}

export default App;