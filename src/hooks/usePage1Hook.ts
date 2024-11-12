
import { useEffect, useState } from 'react';
import Page1Model from '../models/Page1Model';
import { remoteData } from '../models/Page1Model';


const usePage1Hook = () => {

  const [data, setData] = useState<Page1Model[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch('http://localhost:4000/api/flightlist', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json())

      const modelInstances = data1.map((data : remoteData) => new Page1Model(data));
      setData(modelInstances);
    }
    
    fetchData();
  }, []);
  
  return {
    data,
  }
};

export default usePage1Hook;