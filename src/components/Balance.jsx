function Balance({ balance, totalIncome, totalExpenses }) {
    return (
        <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                <h3 className="text-lg font-bold text-black mb-2">Balance</h3>
                <p className={`text-3xl font-black ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${balance.toFixed(2)}
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                <h3 className="text-lg font-bold text-black mb-2">Income</h3>
                <p className="text-3xl font-black text-green-600">${totalIncome.toFixed(2)}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                <h3 className="text-lg font-bold text-black mb-2">Expenses</h3>
                <p className="text-3xl font-black text-red-600">${totalExpenses.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Balance 