import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  // Declare state
  const [data, setData] = useState([]);
  // Display data in JSX
  const dataRender =
    data &&
    data.map((post) => {
      const { id, userId, title, body } = post;
      return (
        <div className="" key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>Written by {userId}</p>
        </div>
      );
    });
  // a method fetching data from API
  const fetchDataFromAPI = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("API呼ばれたで");
        localStorage.setItem("data", JSON.stringify(res.data));
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  // set useEffect to check whether there is a data set in localStorage or not
  useEffect(() => {
    const dataInLocalStorage = localStorage.getItem("data");
    if (dataInLocalStorage) {
      console.log("No API call");
      setData(JSON.parse(dataInLocalStorage));
    } else {
      fetchDataFromAPI();
    }
  }, []);
  return <div>{dataRender}</div>;
};

export default Main;
