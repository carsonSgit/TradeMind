import React from 'react';
import Plot from 'react-plotly.js';

const DataPlot = ({ predictedData, selectedSymbol }) => {
    // Assuming predictedData is an object with 'historical' and 'predicted' arrays

    // Map historical data
    const historicalX = predictedData.historical.map(data => data.days_since_start);
    const historicalY = predictedData.historical.map(data => data.close);
    
    // Map predicted data
    const predictedX = predictedData.predicted.map(data => data.days_since_start);
    const predictedY = predictedData.predicted.map(data => data.close);

    return (
        <Plot
            style={{ width: "100%", height: "100%" }}
            data={[
                {
                    x: historicalX,
                    y: historicalY,
                    type: 'scatter',
                    mode: 'lines',
                    name: 'Historical Daily Average Close',
                    line: { color: 'purple' }
                },
                {
                    x: predictedX,
                    y: predictedY,
                    type: 'scatter',
                    mode: 'lines',
                    name: 'Predicted Daily Average Close',
                    line: { color: 'blue', dash: 'dash' }
                }
            ]}
            layout={{
                title: `${selectedSymbol} Historical and Predicted Stock Prices`,
                xaxis: { title: 'Days Since Start' },
                yaxis: { title: 'Average Closing Price' },
                legend: { orientation: 'h' },
                margin: { l: 50, r: 50, t: 50, b: 50 }, // Adjust left, right, top, bottom margins as needed
                autosize: true // This ensures that the plot will fill the container
            }}
        />
    );
};

export default DataPlot;
