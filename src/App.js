import "./App.css";
import React, { useState, useEffect } from "react";
import Select from "./components/select/";

function App() {
  const [softwareOptions, setSoftwareOptions] = useState([]);
  const [carOptions, setCarOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);

  const [selectedOptionSoftware, setSelectedOptionSoftware] = useState();
  const [selectedOptionCar, setSelectedOptionCar] = useState();
  const [selectedOptionTeam, setSelectedOptionTeam] = useState();

  const [loadingSoftware, setisLoadingSoftware] = useState(false);
  const [loadingCar, setisLoadingCar] = useState(false);
  const [loadingTeam, setisLoadingTeam] = useState(false);

  const handleSelectChangeSoftware = (option) => {
    setSelectedOptionSoftware(option);
  };

  const handleSelectChangeCar = (option) => {
    setSelectedOptionCar(option);
  };
  const handleSelectChangeTeam = (option) => {
    setSelectedOptionTeam(option);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoadingSoftware(true);
        const softwareResponse = await fetch(
          "https://dummyjson.com/c/7a5e-b92f-4e26-afc0"
        );
        const softwareData = await softwareResponse.json();
        setSoftwareOptions(softwareData);
        setisLoadingSoftware(false);

        setisLoadingCar(true);
        const carResponse = await fetch(
          "https://dummyjson.com/c/2d95-d545-415d-a92e"
        );
        const carData = await carResponse.json();
        setCarOptions(carData);
        setisLoadingCar(false);

        setisLoadingTeam(true);
        const teamResponse = await fetch(
          "https://dummyjson.com/c/8f6a-85c4-4d99-ae02"
        );
        const teamData = await teamResponse.json();
        setTeamOptions(teamData);
        setisLoadingTeam(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
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
                    isLoading={loadingSoftware}
                  />
                  <div className="mr-b-20"></div>
                  <Select
                    options={carOptions}
                    onSelect={handleSelectChangeCar}
                    isLoading={loadingCar}
                    disabled={true}
                    value={4}
                  />
                  <div className="mr-b-20"></div>
                  <Select
                    options={teamOptions}
                    onSelect={handleSelectChangeTeam}
                    isLoading={loadingTeam}
                    search={true}
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
