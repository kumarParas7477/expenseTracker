import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
   const [filteredYear,setFilteredYear] = useState('2020');

   const filterChangeHandler = (value) =>{
      props.FilteredYear(value);
      setFilteredYear(value);
   }
   return (
       <Card className ="expenses">
           
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseChart expenses={props.expense}></ExpenseChart>
          <ExpenseList filteredList={props.expense} ></ExpenseList>
      </Card>
   )
}

export default Expenses;