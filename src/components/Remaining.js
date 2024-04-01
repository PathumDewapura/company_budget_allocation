import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
    const { expenses,Currency,Ibudget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.allocatedBudget);
    }, 0);

    const alertType = totalExpenses > Ibudget ? 'alert-danger' : 'alert-success'

    return (
        <div className ={`alert ${alertType}`}>
            <span> 
                {/* {alert(totalExpenses > Ibudget ? 'The value cannot exceeded remaining funds' : 'alert-success')} */}
                Remaining : {Currency}{Ibudget-totalExpenses}
            </span>
        </div>
    )
}

export default Remaining
