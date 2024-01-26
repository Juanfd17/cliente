import React from 'react';

function Hijo1({mensaje, manejadora}) {
    return (
        <div className="hijo">
            <h1>Hijo1</h1>
            <p>{mensaje}</p>
            <textarea rows="5" onChange={(e)=>{
                manejadora("Hijo1", e)}}/>
        </div>
    );
}

export default Hijo1;