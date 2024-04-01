import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Currency = ()=>{
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert alert-success center d-flex justify-content-between'>
            Currency
            {<select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option className='alert alert-success' value="$">$ Dollar</option>
                <option className='alert alert-success' value="£">£ Pound</option>
                <option className='alert alert-success' value="₹">₹ Rupee</option>
                <option className='alert alert-success' value="€">€ Euro</option>
             </select>	
      }	
        </div>
    )
}

export default Currency
