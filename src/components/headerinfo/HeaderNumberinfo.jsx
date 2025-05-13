import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "./Headerinfo.module.css";

const HeaderNumberinfo = () => {
  const [favorites] = useLocalStorage('Favortites', []);

  return (
    <section className={styles.card}>
      <h2>Antal aktiviteter på listen:</h2>
  <p>{favorites.length}</p>
    
      
    </section>
  );
};
export default HeaderNumberinfo;