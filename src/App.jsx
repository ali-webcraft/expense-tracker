import { useState, useEffect } from 'react'
import Form from "./components/form"
import ExpenseList from './components/ExpenseList'
import Chart from './Charts'
import './App.css'


const App = () => {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : []
  })
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const handleAdd = (expense) => {
    setExpenses([...expenses, expense])
  }

  const onDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div className='app'>
      <div className='header'>
        <h1>Expense Tracker 💰</h1>
        <h2>Total: Rs. {total}</h2>
      </div>
      <Form onAdd={handleAdd} />
      <div className='chart-container'>
        <Chart expenses={expenses} />
      </div>
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </div>
  )
}

export default App