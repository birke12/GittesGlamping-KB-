import PageHeader from "../components/pageHeader/PageHeader";
import TextBox from "../components/textBox/Textbox";
import styles from "../components/textBox/textbox.module.css";
import Introduction from "../introduction/Introduction";

const Home = () => {
  return (
    <section>
      <PageHeader
        headerType="home"
        subTitle="Gittes"
        title="Glamping"
        button="BOOK NU"
      />

      <Introduction
        title="Kom og prøv Gittes Glamping"
        text="Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter."
        imageSrc="./headerImages/gitte.jpg"
        buttonText="SE VORES OPHOLD"
        onButtonClick={() => alert("Læs mere klik")}
      />

      {/* First box with fixed height */}
      <TextBox className={styles.firstBoxBG} title="Vores gæster udtaler" />

      {/* Regular textbox with subtitle and text */}
      <TextBox
        subtitle={
          <>
            Lise, 34 år
            <br />
            Har været på romantisk getaway
          </>
        }
        text="Min kæreste og jeg fejrede vores årsdag med et ophold ved Gittes Glamping. Det vil vi helt sikkert gøre igen. personalet var virkelig søde og servicemindede, og maden og stemningen var i top."
      />
      {/* Regular textbox with subtitle and text */}
      <TextBox
        subtitle={
          <>
            Johanne, 22 år
            <br />
            Har været på weekendtur
          </>
        }
        text="Jeg blev inviteret med af min veninde. Det var første gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overraket. Sengene var gode, og det var slet ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt."
      />
      <TextBox
        subtitle={
          <>
            Benjamin, 42 år
            <br />
            Har været på Familiepakken
          </>
        }
        text="Top karakter til Gittes Glamping herfra! Perfekt blanding af primitivt og luksuriøst. Og ungerne elskede det!"
      />
      <TextBox
        subtitle={
          <>
            Peter, 61 år
            <br />
            Har været på Weekendtur
          </>
        }
        text="Jeg havde en rigtig hyggelig weekend, og maden er i særdeleshed en oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk. Jeg er dog ikke så vild med at sejle."
      />
    </section>
  );
};

export default Home;
