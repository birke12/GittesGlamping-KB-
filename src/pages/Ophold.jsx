import { useEffect, useState } from "react";
import CardStay from "../cardStay/CardStay";
import PageHeader from "../components/pageHeader/PageHeader";
import useFetch from "../hooks/useFetch";
import Introduction from "../introduction/Introduction";
import styles from "../cardStay/cardStay.module.css";

/* VISER ALLE STAYS */

const Ophold = () => {
  const { get } = useFetch();

  const [stays, setStays] = useState([]);

  const fetchStays = async () => {
    try {
      const staysData = await get.stays();
      console.log(staysData);
      setStays(staysData.data);
    } catch (error) {
      console.error("Error fetching stays:", error);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);

  console.log(stays);

  return (
    <section>
      <PageHeader headerType="stay" title="Vores ophold" />

      {/* tekst fra Ophold-siden skal stå her i stedet for understående */}
      
      <Introduction
        title="Kom og prøv Gittes Glamping"
        text="Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter."
        imageSrc="./headerImages/gitte.jpg"
        buttonText="SE VORES OPHOLD"
        onButtonClick={() => alert("Læs mere klik")}
        hideImage
        hideButton
        extraTextMargin
      />


{/* MAP OVER STAYS HER */}
        <div className={styles.cardContainer}>
          {stays.map((stay) => (
            <CardStay stay={stay} key={stay._id} />
          ))}
        </div>
      
    </section>
  );
};
export default Ophold;

