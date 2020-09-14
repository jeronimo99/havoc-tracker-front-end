import React, { useState, useEffect } from "react";
import Survivors from "./Survivors";

const SurvivorsPage = () => {
  const [survivors, setSurvivors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSurvivors = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people`
      );
      const data = await response.json();
      setSurvivors(data);
    } catch (err) {
      onErrorModal();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSurvivors();
  }, []);

  const [modal, setModal] = useState({ status: false, message: "" });

  const onErrorModal = () => {
    setModal({status: true, message: "Server is not responding. Try again please."})
  }

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  return (
    <Survivors
      survivors={survivors}
      isLoading={isLoading}
      modal={modal}
      onCloseModal={onCloseModal}
    />
  );
};

export default SurvivorsPage;
