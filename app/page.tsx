import Banner from "../components/shared/Banner";
import { NewDropsCard } from "../components/shared/NewDrops";
import { Reviews } from "../components/shared/Review";
import Categories from "../components/shared/Categories";

export default function Home() {
  return (
    <div className="bg-[#e7e7e3]">

      <Banner></Banner>
      <NewDropsCard></NewDropsCard>
      <Categories></Categories>
      <Reviews></Reviews>

    </div>
  );
}
