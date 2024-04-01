import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

//Define max budget
const BUDGET_MAX_VALUE = 20000;

const Budget = () =>{
    const { expenses,Ibudget,Currency,dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.allocatedBudget);
    }, 0);
    
    //handle increase or decrease budget
    const onChangeBudgetHandler = (event) => {
        //convert input into number type
        const enteredValue = Number(event.target.value);

        // check if the entered value is a number
        if (Number.isNaN(enteredValue)) {
        alert("Please enter a valid number.");
        return;
        }

        // check if the entered value is an integer number
        if (!Number.isInteger(enteredValue)) {
        alert("Please enter an integer number.");
        return;
        }

        // check if the budget value < total expenses
        if (enteredValue < totalExpenses) {
        alert(
            "The value of the buget can't be lower than the expenses value " +
            Currency +
            totalExpenses
        );
        } else {
        if (enteredValue > BUDGET_MAX_VALUE) {
            alert("Please enter a value less that " + BUDGET_MAX_VALUE);
            return;
        }
        //action dispatch function, sent type and payload to reducer
        dispatch({
            type: "SET_BUDGET",
            payload: enteredValue,
        });
        }
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center justify-content-between mr-3'>
            <span>Budget:</span>
            <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
                {Currency}
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                required='required'
                type='number'
                id="name"
                value={Ibudget}
                style={{size: 10}}
                onChange={onChangeBudgetHandler}
                step={10}>
            </input>
            </div>  
        </div>
    )
}

export default Budget
