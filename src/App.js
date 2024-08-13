import "./App.css";
import React, { useState } from "react";
import Select from "./components/select/";

function App() {
  const softwareOptions = [
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
  const carOptions = [
    { label: "Maruti Suzuki Swift", value: "1" },
    { label: "Hyundai i20", value: "2" },
    { label: "Tata Nexon", value: "3" },
    { label: "Mahindra Thar", value: "4" },
    { label: "Toyota Fortuner", value: "5" },
    { label: "Honda City", value: "6" },
    { label: "Kia Seltos", value: "7" },
    { label: "Renault Kiger", value: "8" },
    { label: "MG Hector", value: "9" },
  ];
  const TeamOptions = [
    { label: "Aarav Kumar", value: "1" },
    { label: "Priya Singh", value: "2" },
    { label: "Rohan Gupta", value: "3" },
    { label: "Anjali Rao", value: "4" },
    { label: "Suresh Patil", value: "5" },
    { label: "Deepika Iyer", value: "6" },
    { label: "Nikhil Joshi", value: "7" },
    { label: "Sonia Shah", value: "8" },
    { label: "Rajesh Koothrappali", value: "9" },
  ];

  const [selectedOptionSoftware, setSelectedOptionSoftware] = useState();
  const [selectedOptionCar, setSelectedOptionCar] = useState();
  const [selectedOptionTeam, setSelectedOptionTeam] = useState();

  const handleSelectChangeSoftware = (Option) => {
    setSelectedOptionSoftware(Option);
  };

  const handleSelectChangeCar = (Option) => {
    setSelectedOptionCar(Option);
  };
  const handleSelectChangeTeam = (Option) => {
    setSelectedOptionTeam(Option);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    if (selectedOptionSoftware) {
      alert(
        `Selected option value for sofware : ${selectedOptionSoftware.label}`
      );
    } else {
      alert("No option selected for software");
    }
    if (selectedOptionCar) {
      alert(`Selected option value for car : ${selectedOptionCar.label}`);
    } else {
      alert("No option selected for car");
    }
    if (selectedOptionTeam) {
      alert(
        `Selected option value for Team Member : ${selectedOptionTeam.label}`
      );
    } else {
      alert("No option selected for Team Member");
    }
  };

  return (
    <>
      <div>
        <div className="container-main-2">
          <div className="container-main-50">
            <div className="container-sub">
              <form onSubmit={handleSubmit}>
                <h2>Custom React Select </h2>
                <hr className="hr-tag mr-24" />
                <div className="form-control-submit">
                  <Select
                    options={softwareOptions}
                    onSelect={handleSelectChangeSoftware}
                  />
                  <div className="mr-b-20"></div>
                  <Select
                    options={carOptions}
                    onSelect={handleSelectChangeCar}
                  />
                  <div className="mr-b-20"></div>
                  <Select
                    options={TeamOptions}
                    onSelect={handleSelectChangeTeam}
                  />
                  <div className="mr-b-20"></div>
                  <button className="submit-btn btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
