import './ExpenseDate.css';
const ExpenseDate = (props) => {

    const month = props.expense.toLocaleString('en-us',{month:"long"});
const day = props.expense.toLocaleString('en-us',{day:"2-digit"});
const year = props.expense.getFullYear();
 
    return (
        <div className ="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__reay">{year}</div>
    </div>
    )
}

export default ExpenseDate;