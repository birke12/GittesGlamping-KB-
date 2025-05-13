import styles from "./weekendTur.module.css";
import img1 from "../../../public/stays/weekend.jpg";
import img2 from "../../../public/stays/familiepakken.jpg";
import img3 from "../../../public/stays/tentlights.jpg";

const WeekendTur = () => {
  return (
    <>
      <section className={styles.weekend}>
        <div className={styles.textContainer}>
          <h2>Vi har ophold til enhver smag</h2>
          <p>
            Vores glampingophold er skabt til at tilbyde en kombination af
            eventyr og afslapning. Det er den ideelle flugt fra byens støj og
            stress, og det perfekte sted at genoplade batterierne i en naturskøn
            indstilling. Book dit ophold i dag og giv dig selv lov til at
            fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at
            byde dig velkommen til en oplevelse fyldt med komfort, eventyr og
            skønhed.
          </p>
        </div>
        <div className={styles.bggColor}>
          <div className={styles.weekendtur}>
            <div className={styles.label}>
              <h3>Weekendtur</h3>
              <p>2 personer</p>
              <p>Fra 4200,-</p>
            </div>
            <img src={img1} alt="" />
            <button>Læs Mere</button>
          </div>
          <div className={styles.familypack}>
            <div className={styles.label}>
              <h3>Familiepakken</h3>
              <p>3-6 personer</p>
              <p>Fra 6100,-</p>
            </div>
            <img src={img2} alt="" />
            <button>Læs Mere</button>
          </div>
          <div className={styles.romanticgetaway}>
            <div className={styles.label}>
              <h3>Romantisk getaway</h3>
              <p>2 personer</p>
              <p>Fra 3500,-</p>
            </div>
            <img src={img3} alt="" />
            <button>Læs Mere</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeekendTur;
