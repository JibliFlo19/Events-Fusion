import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/events";

const useFetchEvents = (id = "") => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + id); // /1
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const eventsData = await response.json();
        console.log(eventsData);
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        // console.log(error);
        setError("Error 808");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { events, loading, error };
};

export default useFetchEvents;
