import React, { useState } from 'react'; //It will be optinal
import './ExpenseForm.css';
const ExpenseForm = () =>{
    const [title, setTitle] = useState('Mahendra');
    const [amount, setAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleChangeHandler = (event) =>{
        console.log(`title: ${event.target.value}`);
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        console.log(`amount: ${event.target.value}`);
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        console.log(`date: ${event.target.value}`);
        setEnteredDate(event.target.value);
    }

    //handle form submit
    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            title:title,
            amount:amount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Number</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-10-05" max="2022-10-05" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;