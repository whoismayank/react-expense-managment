import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) =>{
  const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.items ? props.items : [];
    const filterChangeHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
    }
    return <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        expenses.map(expense => {
         return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
  
        })
      }
    </Card>
}

export default Expenses;