import Myfav from "../components/favcard/favCard";
import HeaderNumberinfo from "../components/headerinfo/HeaderNumberinfo";
import PageHeader from "../components/pageHeader/PageHeader";
const Minliste = () => {
  return (
    <section>
      <PageHeader headerType="myList" title="Min liste" />
      <HeaderNumberinfo />
      <Myfav />
    </section>
  );
};
export default Minliste;
