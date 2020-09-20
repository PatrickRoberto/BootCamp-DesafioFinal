import React from 'react'

export default function Information({title, value, style}) {

    const Style = {...style, ...DefautlSTYLE};
    return (
        <span style={Style}>
            {`${title}: ${value}`}
        </span>
    )
}

const DefautlSTYLE = {

    padding: '5px',

}