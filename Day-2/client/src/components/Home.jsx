import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await api.get("/home");
        setData(response.data.message);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          navigate("/login");
        }
      }
    };
    fetchHome();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>only accessible after login</h2>
      {data && <div>{data}</div>};
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore
        quos modi iusto non tempora harum doloribus sint quibusdam expedita!
        Totam atque beatae labore mollitia voluptatem pariatur provident aliquid
        harum?
      </p>
    </div>
  );
};

export default Home;
