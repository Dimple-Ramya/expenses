import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <li>
            <div className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2 className='expense-item h2'>{props.title}</h2>
                    <div className='expense-item__price'>Rs {props.amount}</div>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem;