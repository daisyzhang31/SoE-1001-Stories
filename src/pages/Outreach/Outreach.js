import "./outreach.scss";
import outreachOne from"../../assets/images/outreach_01.png";
import outreachTwo from "../../assets/images/outreach2.png";
import outreachThree from "../../assets/images/outreach3.png";





function Outreach(){

    return (
      <>
        <section className="outreach">
          <div className="outreach__hero">
            <h1 className="outreach__hero-title">Outreach</h1>
            <p className="outreach__hero-text">
              All of our profit goes toward bringing education to underserved
              students around the world through{" "}
              <a
                className="outreach__hero-text-link"
                href="https://www.seedsofempowerment.org/"
              >
                <span className="outreach__hero-text-link">
                  Seeds of Empowerment
                </span>
              </a>
            </p>
          </div>

          <div className="outreach__org">
            <div className="outreach__container">
              <div className="outreach__imgWrap">
                <img
                  className="outreach__img"
                  src={outreachOne}
                  alt="children picture"
                />
              </div>
              <div className="outreach__textWrap">
                <a
                  href="https://www.seedsofempowerment.org/portfolio-items/smile/"
                  className="outreach__title"
                >
                  {" "}
                  <h1 >SMILE Project</h1>
                </a>
                <p className="outreach__text">
                  SMILE stands for Stanford Mobile Inquiry-Based Learning
                  Environment.Integrating mobile technology and innovative
                  learner-centered pedagogy
                </p>
              </div>
            </div>

            <div className="outreach__container">
              <div className="outreach__imgWrap">
                <img
                  className="outreach__img"
                  src={outreachTwo}
                  alt="children picture"
                />
              </div>
              <div className="outreach__textWrap">
                <a
                  href="https://www.seedsofempowerment.org/portfolio-items/halo-curriculum/"
                  className="outreach__title"
                >
                  <h1 >HALO Curriculum</h1>
                </a>
                <p className="outreach__text">
                  Developing 21st century competencies as global leaders and
                  citizens
                </p>
              </div>
            </div>

            <div className="outreach__container">
              <div className="outreach__imgWrap">
                <img
                  className="outreach__img"
                  src={outreachThree}
                  alt="children picture"
                />
              </div>
              <div className="outreach__textWrap">
                <a
                  href="https://www.silverproject.org/"
                  className="outreach__title"
                >
                  <h1>SILVER Project</h1>
                </a>
                <p className="outreach__text">
                  Student-led International Learning and Volunteering
                  Educational Resource
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


export default Outreach;