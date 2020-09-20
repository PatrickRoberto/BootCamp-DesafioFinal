import React from 'react'

export default function Filter({filterValue, filterAction}) {
    const onChangeFilterText = ({target}) =>{
        filterAction(target.value);
    }
    return (
        <div>
            <input type='text' onChange={onChangeFilterText}>
                
            </input>
        </div>
    )
}
