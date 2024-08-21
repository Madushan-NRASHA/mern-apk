import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import User from '../Admin_Data/adminData';

const URL = "http://localhost:5000/data";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL); 
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] };
  }
};

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHandler().then((response) => setData(response.projects || []));
  }, []);

  return (
    <>
        <div className="title-bar" style={{position:"absolute",top:"50px",left:"40%"}}>
          <h1>show data</h1>
        </div>
    
      {data && data.map((item, i) => (
        <div key={i} className='adminData-pos'>
          <User user={item} /><br />
        </div>
       
      ))}
    </>
  );
}

export default Contact;
