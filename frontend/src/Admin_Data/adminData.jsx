import React from 'react';
import './Data.css';
import GitImg from '../assets/git.png'
function Data(props) {
  const { _id, projectName, LangName, GitLink, CreateDate } = props.user || {};

  return (
    <div className="data-container">
    
      <br />
      {_id ? (
        <>
        <img src={GitImg} alt="" srcset="" style={{width:"100px",height:"100px"}}/>
          <h2 style={{position:"absolute",top:"5px",left:"40%"}}>Project Name: {projectName}</h2>
          {/* <h3>Project ID: {_id}</h3> */}
          <h3 style={{position:"absolute",top:"50px",left:"35%"}}>Language Name: {LangName}</h3>
          <h3 style={{position:"absolute",left:"35%",top:"80px"}}>
            GitHub Link: <a href={GitLink} target="_blank" rel="noopener noreferrer">{GitLink}</a>
          </h3>
          <h3>Created Date: {new Date(CreateDate).toLocaleDateString()}</h3>
          {/* <button>Update</button> */}
          <button>Delete</button>
         
        </>
      ) : (
        <h3>Loading project data...</h3>
      )}
    </div>
  );
}

export default Data;
