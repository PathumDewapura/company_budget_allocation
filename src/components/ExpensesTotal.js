import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const ExpensesTotal = () => {
    const { expenses,Currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.allocatedBudget);
    }, 0);

    return (
        <div className='alert alert-primary d-flex align-items-center justify-content-between'>
         Spent so far : {Currency}{totalExpenses}
        </div>
    )
}

export default ExpensesTotal
