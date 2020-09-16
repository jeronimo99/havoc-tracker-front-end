import React, { useState, useEffect } from "react";
import Trade from "./Trade";
import price from "../../utils/price";

const TradeContainer = ({ user1, user2 }) => {
  const [result, setResult] = useState(0);
  const [user1FijiWater, setUser1FijiWater] = useState(0);
  const [user1CampbellSoup, setUser1CampbellSoup] = useState(0);
  const [user1FirstAidPouch, setUser1FirstAidPouch] = useState(0);
  const [user1Ak47, setUser1Ak47] = useState(0);
  const [user2FijiWater, setUser2FijiWater] = useState(0);
  const [user2CampbellSoup, setUser2CampbellSoup] = useState(0);
  const [user2FirstAidPouch, setUser2FirstAidPouch] = useState(0);
  const [user2Ak47, setUser2Ak47] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  useEffect(() => {
    const evaluate =
      user1FijiWater * price.fijiWater +
      user1CampbellSoup * price.campbellSoup +
      user1FirstAidPouch * price.firstAidPouch +
      user1Ak47 * price.ak47 -
      (user2FijiWater * price.fijiWater +
        user2CampbellSoup * price.campbellSoup +
        user2FirstAidPouch * price.firstAidPouch +
        user2Ak47 * price.ak47);

    setResult(evaluate);
  }, [
    user1FijiWater,
    user1CampbellSoup,
    user1FirstAidPouch,
    user1Ak47,
    user2FijiWater,
    user2CampbellSoup,
    user2FirstAidPouch,
    user2Ak47,
  ]);

  const validation = (value, max) => {
    if (value < 0 || value === "") {
      return 0;
    }
    if (value > max) {
      return max;
    }
    return value;
  };

  const user1FijiWaterHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(
      e.target.value,
      user1.inventory.fijiWater
    );
    setUser1FijiWater(validatedValue);
  };
  const user1CampbellSoupHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(
      e.target.value,
      user1.inventory.campbellSoup
    );
    setUser1CampbellSoup(validatedValue);
  };
  const user1FirstAidPouchHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(
      e.target.value,
      user1.inventory.firstAidPouch
    );
    setUser1FirstAidPouch(validatedValue);
  };
  const user1Ak47Handler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user1.inventory.ak47);
    setUser1Ak47(validatedValue);
  };
  const user2FijiWaterHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(
      e.target.value,
      user2.inventory.fijiWater
    );
    setUser2FijiWater(validatedValue);
  };
  const user2CampbellSoupHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(
      e.target.value,
      user2.inventory.campbellSoup
    );
    setUser2CampbellSoup(validatedValue);
  };
  const user2FirstAidPouchHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(
      e.target.value,
      user2.inventory.firstAidPouch
    );
    setUser2FirstAidPouch(validatedValue);
  };
  const user2Ak47Handler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user2.inventory.ak47);
    setUser2Ak47(validatedValue);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      if (
        user1FijiWater === 0 &&
        user1CampbellSoup === 0 &&
        user1FirstAidPouch === 0 &&
        user1Ak47 === 0 &&
        user2FijiWater === 0 &&
        user2CampbellSoup === 0 &&
        user2FirstAidPouch === 0 &&
        user2Ak47 === 0 &&
        result === 0
      ) {
        setModal({
          status: true,
          message: "The trade is empty.",
        });
        setIsLoading(false);
        return;
      } else if (result !== 0) {
        setModal({
          status: true,
          message: "The balance must be 0 for an equivalent exchange.",
        });
        setIsLoading(false);
        return;
      }

      const data = {
        id: user2._id,
        user1FijiWater: parseFloat(user1FijiWater),
        user1CampbellSoup: parseFloat(user1CampbellSoup),
        user1FirstAidPouch: parseFloat(user1FirstAidPouch),
        user1Ak47: parseFloat(user1Ak47),
        user2FijiWater: parseFloat(user2FijiWater),
        user2CampbellSoup: parseFloat(user2CampbellSoup),
        user2FirstAidPouch: parseFloat(user2FirstAidPouch),
        user2Ak47: parseFloat(user2Ak47)
      }

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people/${user1._id}/properties/trade-item`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      if (response.status === 500) {
        setModal({
          status: true,
          message: responseData.message,
        });
        setIsLoading(false);
        return;
      }
      
      setModal({
        status: true,
        message: "The trade was a success!",
      });
      setIsLoading(false);
      
    } catch (err) {
      setModal({
        status: true,
        message: "Error occurred on the server. Try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <Trade
      user1={user1}
      user2={user2}
      result={result}
      price={price}
      user1FijiWater={user1FijiWater}
      user1FijiWaterHandler={user1FijiWaterHandler}
      user1CampbellSoup={user1CampbellSoup}
      user1CampbellSoupHandler={user1CampbellSoupHandler}
      user1FirstAidPouch={user1FirstAidPouch}
      user1FirstAidPouchHandler={user1FirstAidPouchHandler}
      user1Ak47={user1Ak47}
      user1Ak47Handler={user1Ak47Handler}
      user2FijiWater={user2FijiWater}
      user2FijiWaterHandler={user2FijiWaterHandler}
      user2CampbellSoup={user2CampbellSoup}
      user2CampbellSoupHandler={user2CampbellSoupHandler}
      user2FirstAidPouch={user2FirstAidPouch}
      user2FirstAidPouchHandler={user2FirstAidPouchHandler}
      user2Ak47={user2Ak47}
      user2Ak47Handler={user2Ak47Handler}
      onSubmit={onSubmit}
      modal={modal}
      onCloseModal={onCloseModal}
      isLoading={isLoading}
    />
  );
};

export default TradeContainer;
