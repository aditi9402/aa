import Expenses from './components/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';
import React,{useState} from 'react'

function App() {
  let expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpense=(expense)=>{
    //expenses=[...expenses,expense]
    //console.log("in app.js")
    //console.log(expense)
    //setExpenses([expense,...expenses])

    setExpenses((prevExpense)=>[
      expense,...prevExpense
    ])
    console.log(getExpenses)
  }
  const [getExpenses,setExpenses] = useState(expenses)

  return (
    <div>
      <NewExpense onAdd={addExpense}></NewExpense>
      <Expenses items={getExpenses} />
    </div>
  );

  //JSX is basically this code behind the scene 

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Doxx!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;