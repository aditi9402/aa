import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveListener =(expense)=>{
        props.onAdd(expense)
        console.log(expense + "new 2")
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSave ={saveListener}/>
    </div>
  );
};

export default NewExpense;