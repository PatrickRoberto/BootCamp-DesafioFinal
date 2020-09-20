import React from 'react'

export default function Resume({children}) {
    return (
        <div style={STYLE}>
            {children}
        </div>
    )
}

const STYLE = {
    height: '50px',
    witdh: '100%',
    border: '1px  solid gray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alingItems: 'center',
    padding: '2px'
}