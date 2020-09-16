import React, { useState } from "react";
import IdContainer from "./IdContainer";
import TradeContainer from "./TradeContainer";

const TradePage = () => {
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();

  return (
    <>
      {user1 && user2 ? (
        <TradeContainer user1={user1} user2={user2} />
      ) : (
        <IdContainer setUser1={setUser1} setUser2={setUser2} />
      )}
    </>
  );
};

export default TradePage;
