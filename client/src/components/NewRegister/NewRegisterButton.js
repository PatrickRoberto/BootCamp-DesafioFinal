import React from 'react'

export default function NewRegisterButton({titleButton, onClickButtonAction }) {
    
    const ClickButtonAction = ()=>{
        onClickButtonAction();
    }
    
    return (
        <div style={STYLE}>
            <button onClick={ClickButtonAction}>{titleButton}</button>
        </div>
    )
}

const STYLE = {
    background: 'gray',
}
