
import  "./ExpenseForm.css"
import {useState} from 'react'
function ExpenseForm (props){
    const [enteredtitle,setenteredTitle] = useState('')
    const [enteredAmount,setenteredAmount] = useState('')
    const [enteredDate,setenteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const titlelistener =(event)=>{
        setenteredTitle(event.target.value)

        //when using single state function

        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });  Note...this is a bad way bcz it schedules the update

        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });this is recommended bcz it gives latest prevoius state
    }
    const datelistener =(event)=>{
        setenteredDate(event.target.value)
    }
    const amountlistener =(event)=>{
        setenteredAmount(event.target.value)
    }
    const submitlistener=(event)=>{
        event.preventDefault()
        const expense = {
            title: enteredtitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSave(expense)
        console.log(expense +" new")
        setenteredAmount('')
        setenteredDate('')
        setenteredTitle('')
    }


    return(
        <form onSubmit={submitlistener}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredtitle} onChange={titlelistener} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} onChange={amountlistener} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} onChange={datelistener} min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
       
    )
}
export default ExpenseForm