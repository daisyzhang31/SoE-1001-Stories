import "./home.scss";
import HomeHero from "../../components/homehero/HomeHero";
import HomeIntro from "../../components/homeIntro/HomeIntro";
import ShowMap from "../../components/Showmap/ShowMap";


function Home(){

    return (
      <>
        <HomeHero />
        <HomeIntro />
        <ShowMap/>
      </>
    );
}

export default Home;