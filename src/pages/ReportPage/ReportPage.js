import React, { useState, useCallback, useEffect } from "react";
import Report from "./Report";

const ReportPage = () => {
  const [infected, setInfected] = useState(0);
  const [nonInfected, setNonInfected] = useState(0);
  const [inventory, setInventory] = useState({
    fijiWater: 0,
    campbellSoup: 0,
    firstAidPouch: 0,
    ak47: 0,
  });

  const [infectedPoints, setInfectedPoints] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  const sendRequests = useCallback(async () => {
    setIsLoading(true);
    try {
      const infectedResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/report/infected`
      );
      const infectedData = await infectedResponse.json();

      const nonInfectedResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/report/non-infected`
      );
      const nonInfectedData = await nonInfectedResponse.json();

      const inventoryResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/report/people-inventory`
      );
      const inventoryData = await inventoryResponse.json();

      const infectedPointsResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/report/infected-points`
      );
      const infectedPointsData = await infectedPointsResponse.json();
      setInfected(infectedData.infectedPercentage);
      setNonInfected(nonInfectedData.nonInfectedPercentage);
      setInventory(inventoryData.averageItems);
      setInfectedPoints(infectedPointsData.infectedPoints);
    } catch (err) {
      setModal({
        status: true,
        message: "Server is not responding. Try again.",
      });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    sendRequests();
  }, [sendRequests]);

  return (
    <Report
      infected={infected}
      nonInfected={nonInfected}
      inventory={inventory}
      infectedPoints={infectedPoints}
      isLoading={isLoading}
      modal={modal}
      onCloseModal={onCloseModal}
    />
  );
};

export default ReportPage;
