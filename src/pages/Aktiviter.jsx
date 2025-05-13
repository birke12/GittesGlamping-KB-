import Card from "../components/Card/activities";
import Headerinfo from "../components/headerinfo/Headerinfo";
import PageHeader from "../components/pageHeader/PageHeader";

const Aktiviter = () => {
  return (
    <section>
      <PageHeader headerType="activity" title="Aktiviteter" />
      <Headerinfo />

      <Card />
    </section>
  );
};
export default Aktiviter;
