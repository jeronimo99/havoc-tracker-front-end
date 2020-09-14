import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Survivor from './Survivor';

const SurvivorPage = () => {
  const [survivor, setSurvivor] = useState({});

  const params = useParams();

  const fetchSurvivor = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/people/${params.id}`);
    const data = await response.json();
    console.log(data);
    setSurvivor(data);
  };

  useEffect(() => {
    fetchSurvivor();
  }, []);
  
  return <Survivor/>
};

export default SurvivorPage;