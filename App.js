import React, { useState } from 'react';
import './App.css'; 
import StocksList from './components/StocksList';
import AddStock from './components/AddStock';
import UpdateStock from './components/UpdateStock';

function App() {
    const [stocks, setStocks] = useState([]);

    const handleStockAdded = (newStock) => {
        setStocks([...stocks, newStock]);
    };

    const handleStockUpdated = (updatedStock) => {
        setStocks(stocks.map(stock => stock.id === updatedStock.id ? updatedStock : stock));
    };

    return (
        <div>
            <h1>Stock Portfolio Tracker</h1>
            <AddStock onStockAdded={handleStockAdded} />
            <StocksList stocks={stocks} />
            {/* Example usage of UpdateStock with a hardcoded stock ID */}
            <UpdateStock stockId={1} onStockUpdated={handleStockUpdated} />
        </div>
    );
}

export default App;
