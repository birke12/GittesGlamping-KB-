import styles from "./card.module.css";
import Card from "./card";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Activities = () => {
  const { get, error, isLoading } = useFetch();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesData = await get.activities();
        setActivities(activitiesData.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);
  console.log(activities)

  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Fejl: {error}</p>;
  return (
    <section className={styles.activities}>
      <div className={styles.wrap}>
        {activities.map((card) => (
          <Card card={card} key={card._id} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
