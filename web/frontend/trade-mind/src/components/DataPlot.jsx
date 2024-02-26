import React from 'react';
import Plot from 'react-plotly.js';

class DataPlot extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
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
                    layout={
                        {
                            autosize: true,
                            title: 'A Fancy Plot'
                        }
                    }               
                    style={{ width: '100%', height: '100%' }}
                    useResizeHandler={true}
                />
            </div>
        );
    }
}

export default DataPlot;
