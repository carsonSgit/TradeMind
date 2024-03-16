import React from 'react';
import Select from 'react-select';

const StockSymbolSelector = ({ symbols }) => {
  const options = symbols.map(symbol => ({ value: symbol, label: symbol }));

  return (
    <Select
      options={options}
      isSearchable={true}
      placeholder="Select a symbol..."
    />
  );
};

export default StockSymbolSelector;
