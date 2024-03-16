import { useEffect, useState } from "react";
import DataPlot from "../components/DataPlot";
import StockSymbolSelector from "../components/StockSymbolSelector";
import '../styles/Analytics.css';

export default function Analytics() {
    const [symbols, setSymbols] = useState([]);
    
    useEffect(() => {
        const fetchSymbols = async () => {
            try {
                const response = await fetch('http://localhost:8000/symbols');
                const data = await response.json();
                setSymbols(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        fetchSymbols();
    }, []);

    return (
        <div className="analytics-content-container">
            <div className="symbol-selector-container">
                <h1>Select a Stock Symbol</h1>
                <StockSymbolSelector symbols={symbols}/>
            </div>
            <DataPlot />
            <div className='analytics-title'> Analytics </div>
            <div className='analytics-text'>
                <p>
                    We are working on our AI model at the moment, but soon you will be able to see stock analytics for every stock
                    in the S&P 500. You will be able to access the full potential of our TradeMind AI to better your knowledge & allow you
                    to make more informed decisions!
                </p>
                <p>
                    Stocks are a great way to invest your money, but it can be hard to know which stocks to invest in and when to make that
                    investment! We are here to help you with that.
                </p>
            </div>
        </div>
    )
}
