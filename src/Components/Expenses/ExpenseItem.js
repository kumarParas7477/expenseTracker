import React , {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.expense.expenseTitle);
    const clickHandler  = () =>{
        setTitle("C:icked!!")
    }
    return (
        <Card className ="expense-item">
            <ExpenseDate expense ={props.expense.expenseDate} ></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.expense.expenseAmount}
                </div>
            </div>
<button onClick={clickHandler }>Change title</button>
        </Card>
    )
}

export default ExpenseItem;