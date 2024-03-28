import { useEffect, useState } from "react";
import DataPlot from "../components/DataPlot";
import StockSymbolSelector from "../components/StockSymbolSelector";
import '../styles/Analytics.css';
import "../styles/Loading.css"
import Loading from '../components/Loading';

export default function Analytics() {
    const [symbols, setSymbols] = useState([]);
    const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
    const [years, setYears] = useState(1);
    const [predictions, setPredictions] = useState(null);
    const [historicalData, setHistoricalData] = useState(null);

    useEffect(() => {
        const fetchSymbols = async () => {
            try {
                // const response = await fetch('https://trademind.onrender.com/symbols/', { mode: 'cors' });
                const response = await fetch('https://trademind.onrender.com/symbols/', { mode: 'cors' });
                const data = await response.json();
                setSymbols(data);
                handlePredictClick();
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        fetchSymbols();
    }, []);

    const handleYearsChange = (event) => {  // Add a handler for the years select
        setYears(event.target.value);
    };

    const handlePredictClick = async () => {  // New function to handle the Predict button click
        try {

            if(!selectedSymbol)
                return; 

            const response = await fetch(`https://trademind.onrender.com/predict/${selectedSymbol}/${years}`, { mode: 'cors' });
            const data = await response.json();
            
            if(response.ok && data && Object.keys(data).length > 0) {
                setPredictions(data); 
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="analytics-content-container">
            <div className="symbol-selector-container">
                <h1>Select a Stock Symbol</h1>
                <StockSymbolSelector symbols={symbols} setSelectedSymbol={setSelectedSymbol}/>
                <h2>Select Number of Years to Look Ahead</h2>
                <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={years} 
                    onChange={handleYearsChange}
                />
                <p>Selected years: {years}</p>
                <button onClick={handlePredictClick} className="predict-button">Predict</button>
            </div>
            { predictions ?
            <div className="plot-container">
                <DataPlot predictedData={predictions} selectedSymbol={selectedSymbol} /> 
            </div>
            :
            <Loading style={{marginTop: '100px', marginBottom: '100px'}} />
            }
            
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
