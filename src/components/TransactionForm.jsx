function TransactionForm({ onSubmit, description, setDescription, amount, setAmount, type, setType }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!description || !amount) return

        onSubmit({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            type,
            date: new Date()
        })

        setDescription('')
        setAmount('')
        setType('expense')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-lg font-bold text-black mb-2">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 rounded-lg border-2 border-black focus:border-4 focus:outline-none transition-all"
                        placeholder="Enter description"
                    />
                </div>
                <div>
                    <label className="block text-lg font-bold text-black mb-2">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-3 rounded-lg border-2 border-black focus:border-4 focus:outline-none transition-all"
                        placeholder="Enter amount"
                        step="0.01"
                    />
                </div>
                <div>
                    <label className="block text-lg font-bold text-black mb-3">Type</label>
                    <div className="flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="expense"
                                checked={type === 'expense'}
                                onChange={(e) => setType(e.target.value)}
                                className="w-5 h-5 accent-black"
                            />
                            <span className="text-lg font-medium">Expense</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="income"
                                checked={type === 'income'}
                                onChange={(e) => setType(e.target.value)}
                                className="w-5 h-5 accent-black"
                            />
                            <span className="text-lg font-medium">Income</span>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg text-lg font-bold hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    Add Transaction
                </button>
            </div>
        </form>
    )
}

export default TransactionForm 