import "./showMap.scss";
import map from "../../assets/images/homemap.png";
import{useSpring, animated} from "react-spring";
import { Link } from "react-router-dom";


function Number({n}){
    const{number} =useSpring({
from:{number:0},
number: n,
delay:200,
config:{ mass:1, tension:20, friction:10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}


function ShowMap(){

    return (
      <>
        <section className="ShowMap">
          <h1 className="ShowMap__title">1001 Stories By the Numbers </h1>
          <div className="ShowMap__numbers">
            <div className="ShowMap__numbers-contanier">
              <img className="ShowMap__numbers-icon" src="" alt="" />
              <h1 className="ShowMap__numbers-num">
                <Number n={23} />
              </h1>
              <p className="ShowMap__numbers-text">Countries Involved</p>
            </div>

            <div className="ShowMap__numbers-contanier">
              <img className="ShowMap__numbers-icon" src="" alt="" />
              <h1 className="ShowMap__numbers-num">
                <Number n={8050} />
              </h1>
              <p className="ShowMap__numbers-text">Stroies Generated</p>
            </div>

            <div className="ShowMap__numbers-contanier">
              <img className="ShowMap__numbers-icon" src="" alt="" />
              <h1 className="ShowMap__numbers-num">
                <Number n={32} />
              </h1>
              <p className="ShowMap__numbers-text">Picture Books Published</p>
            </div>

            <div className="ShowMap__numbers-contanier">
              <img className="ShowMap__numbers-icon" src="" alt="" />
              <h1 className="ShowMap__numbers-num">
                <Number n={2550} />
              </h1>
              <p className="ShowMap__numbers-text">Volunteers Dedicated</p>
            </div>

            <div className="ShowMap__numbers-contanier">
              <img className="ShowMap__numbers-icon" src="" alt="" />
              <h1 className="ShowMap__numbers-num">
                <Number n={26100} />
              </h1>
              <p className="ShowMap__numbers-text">Children Benefited</p>
            </div>
          </div>

          <div className="ShowMap__img">
            <img className="ShowMap__img-world" src={map} alt="" />
          </div>
        </section>

        <section className="volunteers">
          <h1 className="volunteers__title">Apply As a Volunteer</h1>
          <p className="volunteers__text">
            Get involved in our work from across the globe and work to create a
            greater vision
          </p>

          <div className="volunteers__buttons">
            <Link to="/contact">
              <button className="volunteers__button">VOLUNTEER</button>
            </Link>
            <a
              className="volunteers__button"
              href="https://www.seedsofempowerment.org/donate/"
            >
              <button className="volunteers__button">DONATE NOW</button>
            </a>
          </div>
        </section>
      </>
    );
}

export default ShowMap;