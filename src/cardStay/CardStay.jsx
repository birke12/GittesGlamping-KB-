import { NavLink } from "react-router-dom";
import styles from "./cardStay.module.css";

const CardStay = ({ stay, onRefetch }) => {
  return (
    <div className={styles.cardStayContainer}>
      {/* Top TextBox */}
      <div className={styles.topBox}>
        <h1 className={styles.title}>{stay.title}</h1>
        <p className={styles.text}>{stay.numberOfPersons} personer</p>
        <p className={styles.text}>Fra {stay.price},-</p>
      </div>

      {/* Image Wrapper */}
      <div className={styles.imageWrapper}>
        <img src={stay.image} alt="billede" className={styles.image} />
      </div>

      <div className={styles.buttonWrapper}>
        <NavLink to={`/infostay/${stay._id}`} className={styles.button}>
          Læs Mere
        </NavLink>
      </div>
    </div>
  );
};

export default CardStay;
