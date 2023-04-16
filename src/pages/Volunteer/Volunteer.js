import "./volunteer.scss";
import volunteerPic from "../../assets/images/volunteerthree.png";
import certificate from "../../assets/images/certificate.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

const getVolunteer_URL = `http://localhost:8080/volunteers/certificate`;

function Volunteer() {
  const [volunteer, setVolunteer] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.currentTarget;
    const volunteerFirstName = myForm.firstName.value;
    const volunteerLastName = myForm.lastName.value;

    axios
      .get(getVolunteer_URL, {
        params: { firstName: volunteerFirstName, lastName: volunteerLastName },
      })
      .then(
        (res) => {
          if (res.data !== undefined){
          // show div
           document.getElementById("certificate").style.display = "block";
          setVolunteer(res.data)
          }
        }
      );
  };

  return (
    <>
      <section className="volunteer">
        <div className="volunteer__hero">
          <img
            className="volunteer__img"
            src={volunteerPic}
            alt="volunteerImage"
          />
          <p className="volunteer__img-title">POWERED BY VOLUNTEERS</p>
        </div>
        <p className="volunteer__text">
          We are a 100% volunteer-driven organization. Hundreds of skilled
          volunteers have participated and contributed generously to reach out
          to empower communities around the world.
        </p>

        <div className="volunteer__formWrap">
          <div className="volunteer__formContainer">
            <h1 className="volunteer__form-title">
              Check Your Certificate Here
            </h1>
            <form
              class="volunteer__form"
              id="volunteerForm"
              onSubmit={handleSubmit}
            >
              <div class="volunteer__form-firstName">
                <label class="volunteer__formName--text" htmlFor="name">
                  First Name:{""}
                </label>
                <input
                  class="volunteer__formName--input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Ex: Harry"
                />
              </div>

              <div class="volunteer__form-lastName">
                <label class="volunteer__formName--text" htmlFor="name">
                  Last Name:
                </label>
                <input
                  class="volunteer__formName--input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ex: Potter"
                />
              </div>

              <button class="volunteer__form-button" type="submit">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="volunteer__form-certificate" id="certificate">
            <img
              className="volunteer__form-certificate-img"
              src={certificate}
              alt="certificate"
            />
            <p className="volunteer__form-certificate-name">{volunteer.name}</p>
            <p className="volunteer__form-certificate-story">
              Story Of The {volunteer.storyName}
            </p>
            <span className="volunteer__form-certificate-number">
              {volunteer.issueNumber}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Volunteer;
