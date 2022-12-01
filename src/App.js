import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setIsError(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((prevState) => {
      const newTours = prevState.filter((item) => {
        return item.id !== id;
      });
      return newTours;
    });
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  if (tours.length === 0) {
    return (
      <main className="center-flex">
        <div className="title">
          <h2>no tours left</h2>
        </div>
      </main>
    );
  }
  return (
    <main className="center-flex">
      <Tours tours={tours} onRemove={removeTour} />;
    </main>
  );
};

export default App;
