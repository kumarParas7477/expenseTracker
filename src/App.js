
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';
import { useState } from 'react';
  
const DUMMY_EXPENSES=[
  { id : 1,expenseDate : new Date(2021,1,26), expenseTitle :"Toilet Paper", expenseAmount : 0.67},
  {id : 2, expenseDate : new Date(2021,2,14), expenseTitle :"Pizza", expenseAmount : 2.9},
  {id : 3, expenseDate : new Date(2021,0,28), expenseTitle :"Books", expenseAmount : 50.8},
  {id : 4, expenseDate : new Date(2021,4,9), expenseTitle :"Bakery", expenseAmount : 100.06}
];
function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
const [filteredExpenses,setFilteredExpenses] = useState(expenses);

  const addExpenseHandler = (enteredExpense) => {
 
setExpenses([enteredExpense,...expenses]);
console.log(expenses);
  }
 const  filteredYearHandler = (year) => {
   
setFilteredExpenses(expenses.filter((exp)=> exp.expenseDate.getFullYear().toString() === year.toString()));
 }
  return (
    <div >
     <NewExpense onAddExpense = {addExpenseHandler}/>
     
      <Expenses expense={filteredExpenses} FilteredYear={filteredYearHandler}></Expenses>
    </div>
  );
}

export default App;
