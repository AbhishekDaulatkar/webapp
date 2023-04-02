

export default function Expenses(props){
    return (
        <>
    <ExpenseItem title = {props.items[0].title} 
                amount = {props.items[0].amount}/>
    <ExpenseItem title = {props.items[1].title} 
                amount = {props.items[1].amount}/>
         </>
    );
} 