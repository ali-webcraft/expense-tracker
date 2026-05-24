import { useState } from 'react'

const Form = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('Food')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !amount || !date) {
            alert('Please fill in all fields')
            return
        }

        onAdd({
            id: Date.now(),
            title,
            amount: Number(amount),
            category,
            date
        })

        setTitle('')
        setAmount('')
        setCategory('Food')
        setDate('')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                placeholder='Expense title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />

            <input
                type='number'
                name='amount'
                placeholder='Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required />

            <select name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Other</option>
            </select>

            <input
                type='date'
                name='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required />

            <button type='submit'>Add Expense</button>
        </form>
    )
}

export default Form