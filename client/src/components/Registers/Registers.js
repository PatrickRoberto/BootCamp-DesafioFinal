import React from 'react'

export default function Registers({registersTransactions}) {

    return (
        
        <div>
            {registersTransactions.map((register)=>{
                return (<div style={STYLE}> 
                    {`Mes: ${register.yearMonth} | Dia: ${register.day} - Categoria: ${register.category}  Desc: ${register.description} - Valor: R$ ${register.value}`}
                </div>)
            })}
        </div>
    )
}


const STYLE = {
    padding: '5px',
    marginBottom: '15px',
    border: '1px solid gray'
}
