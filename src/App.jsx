import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import { useTransactions } from './hooks/useTransactions'

function App() {
  const {
    description,
    setDescription,
    amount,
    setAmount,
    type,
    setType,
    transactions,
    balance,
    totalIncome,
    totalExpenses,
    handleAddTransaction,
    handleDeleteTransaction
  } = useTransactions()

  return (
    <div className="min-h-screen bg-[#FFE5E5] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-center mb-12 text-black">Expense Tracker</h1>

        <Balance
          balance={balance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />

        <TransactionForm
          onSubmit={handleAddTransaction}
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
          type={type}
          setType={setType}
        />

        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransaction}
        />
      </div>
    </div>
  )
}

export default App