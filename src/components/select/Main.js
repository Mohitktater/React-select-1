import React, { useState, useEffect } from "react";
import { SearchableSelect } from "./Search.js";

export default function Main() {
  const options = [
    { label: "Frontend Development", value: "1" },
    { label: "Backend Development", value: "2" },
    { label: "CTO as a Service", value: "3" },
    { label: "Devops Engineer", value: "4" },
    { label: "Mobile Develpment", value: "5" },
    { label: "Software testing", value: "6" },
    { label: "Digital Marketing", value: "7" },
    { label: "Web3", value: "8" },
    { label: "UI UX & Graphics Design", value: "9" },
  ];
  const [selectedOption, setSelectedOption] = useState([]);
  const [dataSaved, setDataSaved] = useState("");

  const handleSelectChange = (Option) => {
    setSelectedOption(Option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var dataSubmited = { selection_value: selectedOption };
    console.log(dataSubmited);
    //api to submit code will be here
    //on success response showing the data
    setDataSaved(selectedOption);
  };

  return (
    <div>
      <div className="container-main-2">
        <div className="container-main-50">
          <div className="container-sub">
            <form onSubmit={handleSubmit}>
              <h2>Custom React Select</h2>
              <hr className="hr-tag mr-24" />
              <SearchableSelect
                options={options}
                onSelectFromList={handleSelectChange}
              />
              <div class="form-control-submit">
                <button className="submit-btn btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container-main-50">
          <div className="container-sub">
            <h2>React Select Value Submitted</h2>
            <p>The saved ID is {dataSaved}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
