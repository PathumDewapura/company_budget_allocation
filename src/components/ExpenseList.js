import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = ()=>{
  const { expenses } = useContext(AppContext);

  return (
    <div>
      <table class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col">Department</th>
            <th scope="col">Allocated Budget</th>
            <th scope="col">Increase By 10</th>
            <th scope="col">Decrease By 10</th>
            <th scope="col"> </th>
            </tr>
        </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem
                  id={expense.id}
                  key={expense.id}
                  name={expense.name}
                  allocatedBudget={expense.allocatedBudget}
                />
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default ExpenseList
