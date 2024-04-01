import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { TiDelete } from "react-icons/ti";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

const ExpenseItem = (props) => {
    const { dispatch,Currency } = useContext(AppContext);

    const handleIncrement= () =>{
        const item = {
            name: props.name,
        };

        dispatch({
            type:'INCREMENT',
            payload : item,
        });
    }

    const handleDecrement= () =>{
        const item = {
            name: props.name,
        };

        dispatch({
            type:'DECREMENT',
            payload : item,
        });
    }

    const handleDeleteItem= () =>{
        const item = {
            name: props.name
        };

        dispatch({
            type:'DELETE_ITEM',
            payload : item,
        });
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.allocatedBudget}</td>
        <td><IoIosAddCircle size='1.5em' color='green'onClick={handleIncrement} /></td>
        <td><IoIosRemoveCircle size='1.5em' color='red' onClick={handleDecrement} /></td>
        <td><TiDelete size='1.5em'onClick={handleDeleteItem} /></td>
        </tr>
    )
}

export default ExpenseItem
