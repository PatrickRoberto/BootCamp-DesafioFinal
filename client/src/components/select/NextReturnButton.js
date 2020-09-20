import React from 'react'

export default function NextReturnButton({typeMark, onClinkButoonAction}) {

    const indicador = typeMark ==='Next'? '>' : '<';
    
    return (
        <div>
            <button style={STYLE}>{indicador}</button>
        </div>
    )
}

const STYLE ={
    background: 'blue',
}