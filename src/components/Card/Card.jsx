import styles from "./card.module.css";
import { RiDislikeFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Swal from "sweetalert2";

const Card = ({ card, onDelete }) => {
  const [Favortites, setFavortites] = useLocalStorage("Favortites", []);
  const [isopen, setisopen] = useState(false);
  const isFavortite = Favortites.includes(card._id);

  const handleLike = () => {
    setFavortites((prevFavortites) =>
      isFavortite
        ? prevFavortites.filter((fav) => fav !== card._id)
        : [...prevFavortites, card._id]
    );
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Er du sikker?",
      text: "Du er ved at slette dette produkt.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ja, slet",
      cancelButtonText: "Annullér",
    });

    if (result.isConfirmed) {
      try {
        // Kald en prop-funktion der håndterer sletning
        await onDelete(card._id);

        await Swal.fire("Slettet!", "Produktet er blevet slettet.", "success");
      } catch (error) {
        console.error("Fejl ved sletning:", error);
        Swal.fire("Fejl!", "Noget gik galt under sletning.", "error");
      }
    }
  };

  return (
    <figure className={styles.card} key={card._id}>
      <div className={styles.cardTitle}>
        <h2>{card?.title}</h2>
      </div>

      <div className={styles.cardImg}>
        <img src={card?.image} alt={card?.name} />
      </div>

      <div className={styles.cardName}>
        <div className={styles.flex}>
          <p>{card?.weekday}</p>
          {isFavortite ? (
            <RiDislikeFill size={30} onClick={handleLike} />
          ) : (
            <FaHeart size={30} onClick={handleLike} />
          )}
        </div>

        <p>{card?.time}</p>

        <button
          className={styles.buttonFelx}
          onClick={() => setisopen(!isopen)}
        >
          {isopen ? "Læs mindre" : "Læs mere"}
          <span className={styles.arrowIcon}>
            {isopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>

        {isopen && (
          <div className={styles.cardContent}>
            <h3>{card?.description}</h3>
          </div>
        )}

        <button className={styles.deleteButton} onClick={handleDelete}>
          Slet
        </button>
      </div>
    </figure>
  );
};

export default Card;
