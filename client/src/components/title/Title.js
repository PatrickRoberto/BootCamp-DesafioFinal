import React from 'react'

export default function Title() {
    return (
        <div style={STYLE_BOX}>
            <div>
            <span style={STYLE_TEXT}> Bootcamp Full Stack - Desafio Final</span>
            </div>
            <div>
            <span> Controle Financeiro Pessoal </span>
            </div>
        </div>
    )
}

const STYLE_BOX = {
    textAlign: 'center',
    
}
const STYLE_TEXT = {
    textAlign: 'center',
    fontSize: '2em'
}
