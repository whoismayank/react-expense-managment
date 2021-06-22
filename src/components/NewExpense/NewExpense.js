import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(`In NewExpense.js component`);
        console.log(expenseData)
        props.onAddExpense(expenseData);
    }
    return(
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </Card>
    )

}
export default NewExpense;