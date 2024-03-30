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
    const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(true);
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
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="analytics-content-container">
            <h1>Select a Stock Symbol</h1>
            <div className="symbol-selector-container">
                <div className="for-mobile">
                    <div className="symbol-input-container">
                        Symbols
                        <StockSymbolSelector symbols={symbols} setSelectedSymbol={setSelectedSymbol}/>
                    </div>
                    <div className="symbol-input-container">
                        Years
                        <div class="radio-input">
                        <label>
                            <input value="1" name="value-radio" id="value-1" type="radio" onChange={handleYearsChange} />
                            <span>1</span>
                            </label>
                            <label>
                                <input value="2" name="value-radio" id="value-2" type="radio" onChange={handleYearsChange} />
                            <span>2</span>
                            </label>
                            <label>
                                <input value="3" name="value-radio" id="value-3" type="radio" onChange={handleYearsChange} />
                            <span>3</span>
                            </label>
                            <label>
                                <input value="4" name="value-radio" id="value-4" type="radio" onChange={handleYearsChange} />
                            <span>4</span>
                            </label>
                            <label>
                                <input value="5" name="value-radio" id="value-5" type="radio" onChange={handleYearsChange} />
                            <span>5</span>
                            </label>
                            <span class="selection"></span>
                        </div>
                    </div>
                </div>
                <div className="symbol-input-container">
                    <button onClick={handlePredictClick} className="predict-button">Predict</button>
                </div>
            </div>
            { predictions && !isLoading ?
            <div className="plot-container">
                <DataPlot predictedData={predictions} selectedSymbol={selectedSymbol} /> 
            </div>
            :
            <Loading style={{marginTop: '100px', marginBottom: '100px'}} />
            }
            
            <div className='analytics-title'> Disclaimer </div>
            <div className='analytics-text'>
                <p>
                Please note that this tool is intended for educational purposes only. It is not designed to provide any financial advice, 
                nor should it be used for real-time trading decisions. The creators of this tool are not certified financial advisors and 
                will not be held responsible for any decisions or actions taken based on the information provided by this tool. 
                Always consult with a certified financial advisor before making any investment decisions.
                </p>
            </div>
        </div>
    )
}
