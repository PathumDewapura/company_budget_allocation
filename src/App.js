import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpensesTotal from "./components/ExpensesTotal";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import { AppProvider } from "./context/AppContext";
import ItemSelected from "./components/ItemSelected";

function App() {
  return (
    <AppProvider>
        <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpensesTotal />
          </div>
          <div className='col-sm'>
            <Currency />
          </div>
          <h2 className='mt-3'>Allocation</h2>
          <div className='col-sm'>
            <ExpenseList />
          </div>
          <h2 className='mt-3'>Change Allocation</h2>
          <div className='row mt-3'>
              <div className='col-sm'>
              </div>
          </div>
          <div className='row mt-3'>
              <div className='col-sm'>
                  <ItemSelected />
              </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
