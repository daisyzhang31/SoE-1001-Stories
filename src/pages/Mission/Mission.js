import "../Mission/mission.scss";
import missionOne from "../../assets/images/1001-1.jpeg";
import missionTwo from"../../assets/images/mission2.jpg";
import missionThree from "../../assets/images/mission3.jpg";
import missionFour from"../../assets/images/mission4.jpeg"
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}


function Mission(){

    return (
      <>
        <section className="mission">
          <div className="mission__hero">
            <section className="mission__hero-wrap">
              <div className="mission__hero-contanier">
                <h1 className="mission__hero-numberTitle">
                  <Number n={775} />m
                </h1>
                <p className="mission__hero-numberText">
                  Illiterate adults around the world
                </p>
              </div>

              <div className="mission__hero-contanier">
                <h1 className="mission__hero-numberTitle">
                  <Number n={132} />m
                </h1>
                <p className="mission__hero-numberText">
                  Out of school children
                </p>
              </div>

              <div className="mission__hero-contanier">
                <h1 className="mission__hero-numberTitle">
                  <Number n={775} />m
                </h1>
                <p className="mission__hero-numberText">
                  Children from the poorest families are more likely to be
                  out-of-school.
                </p>
              </div>

              <div className="mission__hero-contanier">
                <h1 className="mission__hero-numberTitle">
                  <Number n={2} />m
                </h1>
                <p className="mission__hero-numberText">Shortage of teachers</p>
              </div>
            </section>

            <div className="mission__hero-textWrap">
              <h1 className="mission__hero-title">MISSION</h1>
              <p className="mission__hero-text">
                Children love to tell stories. However, in many places in the
                world, their creative voices are rarely heard or cultivated. The
                1001 Stories Program conducts storytelling workshops that build
                on children’s natural potential to become original storytellers.
              </p>
            </div>
          </div>

          <div className="mission__container">
            <div className="mission_imgWrap">
              <img
                className="mission__img"
                src={missionOne}
                alt="children picture"
              />

              <div className="mission__img-textWrap">
                <p className="mission__img-text">
                  “My words, my story, to my world.”
                </p>
                <p className="mission__img-text">
                  – author of Three Boys story from the 1001 Stories series
                </p>
              </div>
            </div>
            <p className="mission__text">
              The 1001 Stories Program also leverages the rapidly expanding
              global mobile network to foster literacy development and a
              self-sustaining entrepreneurship model. Children learn to read the
              stories that children in other parts of the world have created and
              then write their own original stories.
            </p>
          </div>

          <div className="mission__container">
            <p className="mission__text">
              Through the 1001 Stories Program, children are empowered while
              their literacy skills are developed. When integrated with mobile
              technologies, these stories become an effective tool for literacy
              by growing reading and writing skills grounded in local languages
              and local themes in areas worldwide.
            </p>
            <div className="mission_imgWrap">
              <img
                className="mission__img"
                src={missionTwo}
                alt="children picture"
              />

              <div className="mission__img-textWrap">
                <p className="mission__img-text">
                  “My words, my story, to my world.”
                </p>
                <p className="mission__img-text">
                  – author of Three Boys story from the 1001 Stories series
                </p>
              </div>
            </div>
          </div>

          <div className="mission__container">
            <div className="mission_imgWrap">
              <img
                className="mission__img"
                src={missionThree}
                alt="children picture"
              />

              <div className="mission__img-textWrap">
                <p className="mission__img-text">
                  “My words, my story, to my world.”
                </p>
                <p className="mission__img-text">
                  – author of Three Boys story from the 1001 Stories series
                </p>
              </div>
            </div>
            <p className="mission__text">
              The 1001 Stories Program also leverages the rapidly expanding
              global mobile network to foster literacy development and a
              self-sustaining entrepreneurship model. Children learn to read the
              stories that children in other parts of the world have created and
              then write their own original stories.
            </p>
          </div>

          <div className="mission__container">
            <p className="mission__text">
              As a part of the program, selected stories are published and made
              available to be purchased, generating a self-supportive,
              entrepreneurial model. All proceeds from the publications are
              re-invested into the local communities of the 1001 Stories
              Program, allowing these young authors from under served
              populations become a part of the story by creating their own
              books.
            </p>
            <div className="mission_imgWrap">
              <img
                className="mission__img"
                src={missionFour}
                alt="children picture"
              />

              <div className="mission__img-textWrap">
                <p className="mission__img-text">
                  “My words, my story, to my world.”
                </p>
                <p className="mission__img-text">
                  – author of Three Boys story from the 1001 Stories series
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


export default Mission;