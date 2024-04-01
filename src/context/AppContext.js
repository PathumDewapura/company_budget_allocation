import React, { createContext, useReducer} from "react";

//The function that responsible for creating new state object based
//on the actions that are received
//action is passed by the dispatch function
export const AppReducer = (state,action) =>{
    let new_expenses = [];
    switch(action.type){
        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.Currency = action.payload;
            return {
                ...state
            };

        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'INCREMENT':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget = expense.allocatedBudget + 10;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'DECREMENT':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget = expense.allocatedBudget - 10;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'ADD_AMOUNT':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget = expense.allocatedBudget + action.payload.allocatedBudget;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_AMOUNT':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBudget  = expense.allocatedBudget - action.payload.allocatedBudget ;
                }
                expense.allocatedBudget  = expense.allocatedBudget  < 0 ? 0: expense.allocatedBudget ;
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'SET_BUDGET':
            return{
                ...state,
                Ibudget : action.payload,
            }
            
        default:
            return state;
    }
}

//initial conditions
const InitialState = {
    Ibudget : 2000,
    Currency: '$',
    expenses : [
        { id: 'Marketing', name: 'Marketing', allocatedBudget: 50},
        { id: 'Finance', name: 'Finance', allocatedBudget: 300},
        { id: 'Sales', name: 'Sales', allocatedBudget: 70},
        { id: 'Human Resource', name: 'Human Resource', allocatedBudget: 40},
        { id: 'IT', name: 'IT', allocatedBudget: 500},
    ]  
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer, InitialState); //store current state and have a function to update the state

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + item.allocatedBudget);
    }, 0);

    state.Budget = totalExpenses;
    
    return (
    <AppContext.Provider 
        value={{
            Ibudget:state.Ibudget,
            expenses:state.expenses,
            dispatch,
            Currency : state.Currency}}
    >
        {props.children}
    </AppContext.Provider>)
}