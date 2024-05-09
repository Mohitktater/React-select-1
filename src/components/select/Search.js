import React, { useEffect, useState } from "react";
import "./search.css";

export const SearchableSelect = ({ options, onSelectFromList }) => {
  const [filteredOptions, setFilteredOptions] = useState([options]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isListVisiable, setIsListVisiable] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    filterOptions(inputValue);
  };

  const filterOptions = (inputvalue) => {
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(inputvalue.toLowerCase()) > -1
    );
    setFilteredOptions(filteredOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelectFromList(option.value);
    setFilteredOptions([]);
    handleShowList();
  };

  const handleShowList = () => {
    setIsListVisiable((prevState) => (prevState === true ? false : true));
  };

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  return (
    <div>
      <div className="search-component">
        <div className="selected-value">
          {selectedOption ? selectedOption.label : "--select--"}
          <div className="right-div" onClick={() => handleShowList()}></div>
        </div>
        <div className={`search-list-ul ${isListVisiable ? "visible" : ""}`}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <ul>
            {filteredOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
