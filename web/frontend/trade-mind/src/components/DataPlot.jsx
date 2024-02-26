import React from 'react';
import Plot from 'react-plotly.js';

class DataPlot extends React.Component {
    render() {
        return (
                // Styling for the container div
                <div style={{width: '70%', height: '100%', overflow: 'hidden'}}>
                    <Plot
                        // Data to be plotted
                        data={[
                            {
                                x: [1, 2, 3],
                                y: [2, 6, 3],
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: {color: 'red'},
                            },
                            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},  // Chart data
                        ]}
                        layout={{
                            autosize: true,  // Automatically adjust size
                            margin: { t: 50, b: 50, l: 50, r: 50 },  // Margins
                            title: 'A Fancy Plot'  // Plot title
                        }}
                        // Styling for the plot component
                        style={{ width: '100%', height: '100%' }}
                        // Enable resizing of the plot
                        useResizeHandler={true}
                    />
                </div>
            );
        }
    }

export default DataPlot;
