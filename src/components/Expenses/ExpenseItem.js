import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';
import { useState } from 'react';
const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props?.title);
  const eventHandler = () =>{
    setTitle('Mahendra'); 
    console.log(title);
  }

  setTimeout(() => {
    eventHandler();
  }, 500);
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={eventHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;