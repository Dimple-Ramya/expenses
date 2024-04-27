import React, { useState } from "react"
import './Expenses.css'
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2024')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    // console.log(typeof (filteredExpenses))
    // console.log(filteredExpenses)

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectingYear={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

        </div>)
}

export default Expenses