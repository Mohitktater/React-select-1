import React, { useState, useRef, useEffect } from "react";

import "./search.css";

export const SearchableSelect = ({ options, onSelect }) => {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isListVisiable, setIsListVisiable] = useState(false);
  const wrapperRef = useRef(null);

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
    onSelect(option);
    setFilteredOptions([]);
    toggleSuggestionList();
  };

  const toggleSuggestionList = () => {
    setIsListVisiable((prevState) => !prevState);
  };
  useEffect(() => {
    // Function to check if clicked outside of component
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsListVisiable(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div>
      <div ref={wrapperRef} className="search-component">
        <div className="selected-value">
          {selectedOption ? selectedOption.label : "--select--"}
          <div
            className="right-div"
            onClick={() => toggleSuggestionList()}
          ></div>
        </div>
        <div className={`search-list-ul ${isListVisiable ? "visible" : ""}`}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <ul>
            {filteredOptions.map((option) => (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
