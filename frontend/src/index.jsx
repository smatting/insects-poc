import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import SketchCanvas from "./components/SketchCanvas";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState([]);
  const [imgPNG, setImgPNG] = useState(null);

  useEffect(() => {
    console.log(process.env.BACKEND_URL);
    fetch(process.env.BACKEND_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    console.log(process.env.BACKEND_URL);
    console.log("detect", imgPNG);
    fetch(process.env.BACKEND_URL + "/detect", {
      method: "POST",
      body: JSON.stringify({ img: imgPNG }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponse(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [imgPNG]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <SketchCanvas updateImage={setImgPNG} />
      </>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
