import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import { TransactionProvider } from "./context/TransactionContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Navbar />
        <div className="center-container">
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TransactionProvider>
  );
}

export default App;
