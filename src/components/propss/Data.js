export default function Data ()  {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12
    },
    { id: 'e2', title: 'New TV', amount: 799.49 },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.6
      
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450
      
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem items={expenses} />
      {/* <ExpenseItem title = {props.expenses[0].title} 
                amount = {props.expenses[0].amount}/>
    <ExpenseItem title = {props.expenses[1].title} 
                amount = {props.expenses[1].amount}/> */}
    </div>
  );
}


