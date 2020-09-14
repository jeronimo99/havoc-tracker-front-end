import React, { useState } from "react";
import IdContainer from "./IdContainer";
import LocationContainer from "./LocationContainer";

const UpdatePage = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");

  return (
    <>
      {!id ? (
        <IdContainer setId={setId} setUsername={setUsername} />
      ) : (
        <LocationContainer id={id} username={username} />
      )}
    </>
  );
};

export default UpdatePage;