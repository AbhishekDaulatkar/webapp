import Expenses from './Expenses.js'

export default function ExpenseItem(props){
    return (
        <div> {props.title}  </div>
        <div>$${props.amount}</div>
    );
}
