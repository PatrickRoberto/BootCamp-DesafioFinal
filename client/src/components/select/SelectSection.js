import React from 'react'


export default function SelectSection({children}) {
    return (
        <div style={STYLE}>
            {children}
        </div>
    )
}

const STYLE = {
    padding: '2px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}