import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"
const ExpenseList = (props) => {
    
    if(props.filteredList.length == 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
return <ul className="expenses-list">
    
    {props.filteredList.map((exp)=>
        <ExpenseItem expense={exp} key={exp.id} ></ExpenseItem> )}
        </ul>
}

export default ExpenseList;