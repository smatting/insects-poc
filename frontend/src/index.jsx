import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./components/HelloWorld";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    console.log(process.env.BACKEND_URL);
    fetch(process.env.BACKEND_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponse(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <HelloWorld name={response.name} />;
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
