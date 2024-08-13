import React from 'react';

function Data(props) {
  // Destructure the user object from props, defaulting to an empty object
  const { _id, projectName, LangName, GitLink, CreateDate } = props.user || {};

  // Render the component conditionally based on the availability of user data
  return (
    <div>
      <h1>Project Display</h1>
      <br />
      {_id ? (
        <>
          <h2>Project Name: {projectName}</h2>
          <h3>Project ID: {_id}</h3>
          <h3>Language Name: {LangName}</h3>
          <h3>GitHub Link: <a href={GitLink} style={{ color: "wheat" }} target="_blank" rel="noopener noreferrer">{GitLink}</a></h3>
          <h3>Created Date: {new Date(CreateDate).toLocaleDateString()}</h3>
          <button>Update</button>
          <button>Delete</button>
        </>
      ) : (
        <h3>Loading project data...</h3>
      )}
    </div>
  );
}

export default Data;
