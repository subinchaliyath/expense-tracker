import "./App.css";
import { Header } from "./componets/Header";
import { Balance } from "./componets/Balance";
import { IncomeExpense } from "./componets/IncomeExpense";
import { TransactionList } from "./componets/TransactionList";
import { AddTransaction } from "./componets/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
