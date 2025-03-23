function TransactionList({ transactions, onDelete }) {
    if (transactions.length === 0) {
        return (
            <div className="bg-white rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Transactions</h2>
                <p className="text-lg text-gray-600 text-center">No transactions yet</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Transactions</h2>
            <div className="space-y-4">
                {transactions.map(transaction => (
                    <div
                        key={transaction.id}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 border-black ${transaction.type === 'income'
                            ? 'bg-green-100 hover:bg-green-200'
                            : 'bg-red-100 hover:bg-red-200'
                            } transition-colors`}
                    >
                        <div>
                            <h3 className="text-lg font-bold text-black">{transaction.description}</h3>
                            <p className="text-sm text-gray-600">
                                {transaction.date.toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className={`text-xl font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                            </span>
                            <button
                                onClick={() => onDelete(transaction.id)}
                                className="bg-black text-white px-4 py-2 rounded-lg font-bold hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TransactionList 