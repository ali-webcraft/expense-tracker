import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'


const COLORS = ['#fe0000', '#00C49F', '#f3a703', '#0eaa00', '#842aa8']

const Chart = ({ expenses }) => {

    // Categories group karo
    const data = expenses.reduce((acc, expense) => {
        const existing = acc.find(item => item.name === expense.category)
        if (existing) {
            existing.value += expense.amount
        } else {
            acc.push({ name: expense.category, value: expense.amount })
        }
        return acc
    }, [])

    if (expenses.length === 0) return <p>No data to show!</p>

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={150}
            >
                {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip formatter={(value) => `Rs. ${value}`} />
            <Legend />
        </PieChart>
    )
}

export default Chart