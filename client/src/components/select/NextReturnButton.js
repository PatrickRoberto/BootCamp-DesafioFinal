import React from 'react'

export default function NextReturnButton({typeMark, onClinkButoonAction}) {

    const indicador = typeMark ==='Next'? '>' : '<';
    
    return (
        <div >
            <button className="waves-effect waves-light btn-small" style={STYLE}>{indicador}</button>
        </div>
    )
}

const STYLE ={
    margin: '1px',
    fontSize: '2em'
}