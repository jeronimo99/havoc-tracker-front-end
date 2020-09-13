import React, {useState, useEffect} from 'react';
import Survivors from './Survivors';

const SurvivorsPage = () => {
  const [survivors, setSurvivors] = useState([]);

  const fetchSurvivors = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/people`);
    const data = await response.json();
    setSurvivors(data);
  };

  useEffect(() => {
    fetchSurvivors();
  }, []);

  return <Survivors survivors={survivors} />
};

export default SurvivorsPage;