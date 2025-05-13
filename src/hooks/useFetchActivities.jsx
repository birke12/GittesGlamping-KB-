import { useEffect, useState } from "react";
const useFetchActivities = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get all activities
  const fetchactivities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:3042/activities");
      const data = await response.json();
      console.log(data);
      setActivities(data.data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create activitie
  const createactivitie = async (activitieData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:3042/activities", {
        method: "POST",
        body: activitieData,
      });

      if (response.status === "error") {
        throw new Error("Fejl ved oprettelse af ophold");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch
  const refetch = () => {
    fetchactivities();
  };

  // Update activitie
  const updateActivitie = async (activitieData) => {
    try {
      const response = await fetch(`http://127.0.0.1:3042/activities/${id}`, {
        method: "PUT",
        body: activitieData,
      });

      if (response.status === "error") {
        console.log("fejl");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete activitie
  const deleteactivitie = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:3042/activities/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get be ID
  const fetchActivitieById = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:3042/activities/${id}`, {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchactivities();
  }, []);

  return {
    activities,
    isLoading,
    error,
  };
};

export default useFetchActivities ;
