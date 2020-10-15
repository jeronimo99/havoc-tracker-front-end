import React, { useState, useEffect } from "react";
import Trade from "./Trade";
import price from "../../utils/price";

const TradeContainer = ({ user1, user2 }) => {
  const [result, setResult] = useState(0);
  const [user1water, setUser1water] = useState(0);
  const [user1food, setUser1food] = useState(0);
  const [user1firstAid, setUser1firstAid] = useState(0);
  const [user1gun, setUser1gun] = useState(0);
  const [user2water, setUser2water] = useState(0);
  const [user2food, setUser2food] = useState(0);
  const [user2firstAid, setUser2firstAid] = useState(0);
  const [user2gun, setUser2gun] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  useEffect(() => {
    const evaluate =
      user1water * price.water +
      user1food * price.food +
      user1firstAid * price.firstAid +
      user1gun * price.gun -
      (user2water * price.water +
        user2food * price.food +
        user2firstAid * price.firstAid +
        user2gun * price.gun);

    setResult(evaluate);
  }, [
    user1water,
    user1food,
    user1firstAid,
    user1gun,
    user2water,
    user2food,
    user2firstAid,
    user2gun,
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

  const user1waterHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user1.inventory.water);
    setUser1water(validatedValue);
  };
  const user1foodHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user1.inventory.food);
    setUser1food(validatedValue);
  };
  const user1firstAidHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user1.inventory.firstAid);
    setUser1firstAid(validatedValue);
  };
  const user1gunHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user1.inventory.gun);
    setUser1gun(validatedValue);
  };
  const user2waterHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user2.inventory.water);
    setUser2water(validatedValue);
  };
  const user2foodHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user2.inventory.food);
    setUser2food(validatedValue);
  };
  const user2firstAidHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user2.inventory.firstAid);
    setUser2firstAid(validatedValue);
  };
  const user2gunHandler = (e) => {
    e.preventDefault();
    const validatedValue = validation(e.target.value, user2.inventory.gun);
    setUser2gun(validatedValue);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      if (
        user1water === 0 &&
        user1food === 0 &&
        user1firstAid === 0 &&
        user1gun === 0 &&
        user2water === 0 &&
        user2food === 0 &&
        user2firstAid === 0 &&
        user2gun === 0 &&
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
        user1water: parseFloat(user1water),
        user1food: parseFloat(user1food),
        user1firstAid: parseFloat(user1firstAid),
        user1gun: parseFloat(user1gun),
        user2water: parseFloat(user2water),
        user2food: parseFloat(user2food),
        user2firstAid: parseFloat(user2firstAid),
        user2gun: parseFloat(user2gun),
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people/${user1._id}/properties/trade-item`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
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
      user1water={user1water}
      user1waterHandler={user1waterHandler}
      user1food={user1food}
      user1foodHandler={user1foodHandler}
      user1firstAid={user1firstAid}
      user1firstAidHandler={user1firstAidHandler}
      user1gun={user1gun}
      user1gunHandler={user1gunHandler}
      user2water={user2water}
      user2waterHandler={user2waterHandler}
      user2food={user2food}
      user2foodHandler={user2foodHandler}
      user2firstAid={user2firstAid}
      user2firstAidHandler={user2firstAidHandler}
      user2gun={user2gun}
      user2gunHandler={user2gunHandler}
      onSubmit={onSubmit}
      modal={modal}
      onCloseModal={onCloseModal}
      isLoading={isLoading}
    />
  );
};

export default TradeContainer;
