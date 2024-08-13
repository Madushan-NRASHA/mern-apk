import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import User from '../DisplayData/data';

const URL = "http://localhost:5000/data";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data; // Ensure this is the correct format
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] }; // Return empty data in case of error
  }
};

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHandler().then((response) => setData(response.data || []));
  }, []);

  return (
    <>
      {data && data.map((item, i) => (
        <div key={i}>
          <User user={item} />
        </div>
      ))}
    </>
  );
}

export default Contact;
