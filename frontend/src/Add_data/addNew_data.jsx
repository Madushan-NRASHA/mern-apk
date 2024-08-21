import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewData() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    projectName: "",
    LangName: "",
    GitLink: "",
    CreateDate: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate('/'));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/data", {
      projectName: inputs.projectName,
      LangName: inputs.LangName,
      GitLink: inputs.GitLink,
      CreateDate: inputs.CreateDate,
    });
  };

  return (
    <div className="add-data" style={{ position: "absolute", top: "30px" }}>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">project name</label>
        <input
          type="text"
          name="projectName"
          onChange={handleChange}
          id=""
          value={inputs.projectName}
        />
        <br />
        <br />
        <label htmlFor="">Lang name</label>
        <input
          type="text"
          name="LangName"
          onChange={handleChange}
          id=""
          value={inputs.LangName}
        />
        <br />
        <br />
        <label htmlFor="">GitName</label>
        <input
          type="text"
          name="GitLink"
          onChange={handleChange}
          id=""
          value={inputs.GitLink}
        />
        <br />
        <br />
        <label htmlFor="">create date</label>
        <input
          type="date"
          name="CreateDate"
          onChange={handleChange}
          id=""
          value={inputs.CreateDate}
        />
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default AddNewData;