import React from 'react';
import Plot from 'react-plotly.js';

class DataPlot extends React.Component {
    generateTimeSeriesData(symbols, days) {
        const startDate = new Date(2020, 0, 1); // Starting from January 1, 2020
        const data = symbols.map(symbol => {
            let dates = [];
            let values = [];
            let currentValue = Math.random() * 100; // Initial random value between 0 and 100

            for (let i = 0; i < days; i++) {
                dates.push(new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000));
                currentValue += (Math.random() - 0.5) * 10; // Random walk
                values.push(currentValue);
            }

            return {
                x: dates,
                y: values,
                type: 'scatter',
                mode: 'lines',
                name: symbol,
            };
        });

        return data;
    }

    render() {
        const symbols = ['AAPL', 'MSFT', 'GOOGL']; // Example: Using 3 symbols for simplicity
        const timeSeriesData = this.generateTimeSeriesData(symbols, 30); // Generate data for 30 days

        return (
            <div style={{ width: '70%', height: '100%', overflow: 'hidden' }}>
                <Plot
                    data={timeSeriesData}
                    layout={{
                        autosize: true,
                        title: 'Sample Time Series Data for Selected Stocks',
                        xaxis: { title: 'Date' },
                        yaxis: { title: 'Stock Price' },
                        margin: { t: 50, b: 50, l: 50, r: 50 },
                    }}
                    style={{ width: '100%', height: '100%' }}
                    useResizeHandler={true}
                />
            </div>
        );
    }
}

export default DataPlot;
