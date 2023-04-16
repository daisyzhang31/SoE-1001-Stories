import "../homeIntro/homeIntro.scss";
import { Link } from "react-router-dom";


function HomeIntro(){

    return (
      <>
        <section className="homeIntro">
          <div className="homeIntro__numbers">
          </div>

          <div className="homeIntro__info">
            <h1 className="homeIntro__info-title">1001 Stories</h1>
            <div className="homeIntro__info-seperator"></div>
            <p className="homeIntro__info-text">
              Our storytelling program, 1001 Stories, brings meaningful learning
              to some of the hardest to reach populations around the world. We
              aim to facilitate the creation, development, and gathering of 1001
              empowering stories from every participating local community.
            </p>

            <Link to="/mission">
              <button className="homeIntro__button">OUR MISSION</button>
            </Link>
          </div>
        </section>
      </>
    );
}

export default HomeIntro;