const ExpenseItem = ({ expense, onDelete }) => {
    return (
        <div className='expense-item'>
            <div>
                <h3>{expense.title}</h3>
                <p>{expense.category} — {expense.date}</p>
            </div>
            <div>
                <span className='amount'>Rs. {expense.amount.toFixed(2)}</span>
                <button className='delete-btn' onClick={() => onDelete(expense.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ExpenseItem