import React, { useState, useRef, useEffect } from "react";

import "./search.css";

export default function Select({
  options,
  onSelect,
  isLoading,
  search,
  disabled,
  value,
}) {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isListVisiable, setIsListVisiable] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(options);
    if (value) {
      const foundOption = options.find((option) => option.value == value);
      if (foundOption) {
        setSelectedOption(foundOption);
      }
    }
  }, [options, value]);

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
    toggleSuggestionList();
  };

  const toggleSuggestionList = () => {
    if (!disabled) {
      setIsListVisiable((prevState) => !prevState);
    }
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
        <div className={`selected-value ${disabled ? "select-disabled" : ""}`}>
          {selectedOption ? selectedOption.label : "--select--"}
          <div
            className="right-div"
            onClick={() => toggleSuggestionList()}
          ></div>
          {isLoading && <div className="select-loader"></div>}
        </div>
        <div className={`search-list-ul ${isListVisiable ? "visible" : ""}`}>
          {search && (
            <input
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
            />
          )}

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
}
