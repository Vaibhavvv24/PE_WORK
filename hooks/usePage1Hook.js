
import { useEffect, useState } from 'react';
import Page1Model from '../models/Page1Model';

const usePage1Hook = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch('http://localhost:4000/api/flightlist', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json())

      const modelInstances = data1.map(item => new Page1Model(item));
      setData(modelInstances);
    }
    
    fetchData();
  }, []);
  
  return {
    data,
  }
};

export default usePage1Hook;