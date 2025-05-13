import { useEffect, useState } from "react";
import styles from "./favCard.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/card";

const Myfav = () => {
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
  const [Favortites] = useLocalStorage("Favortites", []);



  const favortiteCards = activities.filter((card) =>
    Favortites.includes(card._id)
  );
    console.log(favortiteCards);

  return (
    <section className={styles.wrap}>
      {favortiteCards?.map((card) => (
        <Card key={card._id} card={card} />
        
      ))}
    </section>
  );
};
export default Myfav;
