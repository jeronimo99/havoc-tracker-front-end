import React, { useState } from "react";
import IdContainer from "./IdContainer";
import FlagContainer from "./FlagContainer";

const FlagPage = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");

  return (
    <>
      {!id ? (
        <IdContainer setId={setId} setUsername={setUsername} />
      ) : (
        <FlagContainer id={id} username={username} />
      )}
    </>
  );
};

export default FlagPage;