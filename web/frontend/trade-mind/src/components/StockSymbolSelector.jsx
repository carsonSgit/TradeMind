import React from 'react';
import Select from 'react-select';

const StockSymbolSelector = ({ symbols, setSelectedSymbol, style }) => {
  const options = symbols.map(symbol => ({ value: symbol, label: symbol }));

  const handleChange = selectedOption => {
    setSelectedSymbol(selectedOption.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: 300,
      zIndex: 2
    }),
  };

  return (
    <Select
      options={options}
      isSearchable={true}
      placeholder="Select a symbol..."
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default StockSymbolSelector;
