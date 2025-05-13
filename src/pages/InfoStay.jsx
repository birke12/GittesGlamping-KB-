// InfoStay.jsx
import styles from "../infoStays/infoStay.module.css"; // adjust path if needed
import { useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader/PageHeader";
import Introduction from "../introduction/Introduction";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const InfoStay = () => {
  const { id } = useParams();
  const { get } = useFetch();
  const [stay, setStay] = useState({});

  const fetchStay = async () => {
    try {
      const stayData = await get.stay(id);
      console.log("Stay data:", stayData);
      setStay(stayData.data);
    } catch (error) {
      console.error("Error fetching stay:", error);
    }
  };

  useEffect(() => {
    fetchStay();
  }, []);

  // Convert includes to array if it's a string
  const includesArray =
    typeof stay.includes === "string"
      ? stay.includes.split(",").map((item) => item.trim())
      : Array.isArray(stay.includes)
      ? stay.includes
      : [];

  return (
    <section className={styles.infoSection}>
      <PageHeader headerType="infostay" title={stay.title || "Ophold"} />

      <Introduction
        title="Tag væk en weekend, med én du holder af"
        text={stay.description}
        buttonText="SE VORES OPHOLD"
        onButtonClick={() => alert("Læs mere klik")}
        hideImage
        hideButton
        extraTextMargin
      />
      <div className={styles.includesContainer}>
        <div className={styles.includesList}>
          {includesArray.map((item, index) => (
            <p key={index} className={styles.includesItem}>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.price}>Pris {stay.price},-</div>
        <button className={styles.button}> Book nu</button>
      </div>
    </section>
  );
};

export default InfoStay;
