import "./storyTeller.scss";
import storyTellerPic from "../../assets/images/storyTeller.png";
import certificate from "../../assets/images/storyTellerPic.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

const getStoryTeller_URL = `http://localhost:8080/storytellers/certificate`;

function StoryTeller() {
  const [StoryTeller, setStoryTeller] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.currentTarget;
    const StoryTellerFirstName = myForm.firstName.value;
    const StoryTellerLastName = myForm.lastName.value;

    axios
      .get(getStoryTeller_URL, {
        params: {
          firstName: StoryTellerFirstName,
          lastName: StoryTellerLastName,
        },
      })
      .then((res) => {
        if (res.data !== undefined) {
          // show div
          document.getElementById("certificate").style.display = "block";
          setStoryTeller(res.data);
        } else{
            document.getElementById("certificate").style.display = "none";
        }
      });
  };

  return (
    <>
      <section className="storyTeller">
        <div className="storyTeller__hero">
          <img
            className="storyTeller__img"
            src={storyTellerPic}
            alt="storyTellerImage"
          />
          <p className="storyTeller__img-title">OUR STORYTELLERS</p>
        </div>
        <p className="storyTeller__text">
          As a part of the program, selected stories are published and made
          available to be purchased, generating a self-supportive,
          entrepreneurial model.
        </p>

        <div className="storyTeller__formWrap">
          <div className="storyTeller__formContainer">
            <h1 className="storyTeller__form-title">
              Check Your Certificate Here
            </h1>
            <form
              class="storyTeller__form"
              id="storyTellerForm"
              onSubmit={handleSubmit}
            >
              <div class="storyTeller__form-firstName">
                <label class="storyTeller__formName--text" htmlFor="name">
                  First Name:{""}
                </label>
                <input
                  class="storyTeller__formName--input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Ex: Harry"
                />
              </div>

              <div class="storyTeller__form-lastName">
                <label class="storyTeller__formName--text" htmlFor="name">
                  Last Name:
                </label>
                <input
                  class="storyTeller__formName--input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ex: Potter"
                />
              </div>

              <button class="storyTeller__form-button" type="submit">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="storyTeller__form-certificate" id="certificate">
            <img
              className="storyTeller__form-certificate-img"
              src={certificate}
              alt="certificate"
            />
            <p className="storyTeller__form-certificate-name">
              {StoryTeller.name}
            </p>
            <span className="storyTeller__form-certificate-date">
              {" "}
              {StoryTeller.IssueDate}
            </span>
            <span className="storyTeller__form-certificate-number">
              {StoryTeller.IssueNumber}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default StoryTeller;
