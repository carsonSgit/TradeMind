import React from 'react';
import Plot from 'react-plotly.js';

class DataPlot extends React.Component {
    render() {
        return (
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={{width: 1000, height: 800, title: 'A Fancy Plot'}}
            />
        );
    }
}

export default DataPlot;
