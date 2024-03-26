import React from 'react';
import Select from 'react-select';

const StockSymbolSelector = ({ symbols, setSelectedSymbol }) => {
  const options = symbols.map(symbol => ({ value: symbol, label: symbol }));

  const handleChange = selectedOption => {
    setSelectedSymbol(selectedOption.value);
  };

  return (
    <Select
      options={options}
      isSearchable={true}
      placeholder="Select a symbol..."
      onChange={handleChange}
    />
  );
};

export default StockSymbolSelector;
