import React, {useEffect} from 'react';
import M from "materialize-css";

export default function SelectYearMonth({yearMonthList, changeSelectFilter, startValue}) {

    useEffect(() => {
        M.AutoInit();

    }, []);

    const handleChangeSelect = ({target}) =>{
        changeSelectFilter(target.value);
    }

    if(!yearMonthList.length)
        return (
            <div>Sem select</div>
        )

    return (
        <div style={STYLE}>
          <select 
            value={startValue}
            onChange={handleChangeSelect}
        >
            {yearMonthList.map(({index, item}) => {
            return (
                <option key={index} value={item}>
                    {item}
                </option>
            );
            })}
      </select>
        </div>
    )
}

const STYLE = {
    background: 'pink',
    width: '150px',

}