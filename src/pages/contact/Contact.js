import "./contact.scss";
import contact from "../../assets/images/contactone.jpeg";
import error from "../../assets/icons/error-24px.svg";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myform = event.currentTarget;
    const isNameValid = myform.contactname.value;
    const isEmailValid = myform.email.value;
    const isMessageValid = myform.message.value;

    if (!isNameValid) {
      myform.contactname.style.border = "1px solid red";
      document.getElementById("contactname-Valid").style.display = "block";
    } else {
      myform.contactname.style.border = "1px solid #E1E1E1";
      document.getElementById("contactname-Valid").style.display = "none";
    }

    if (!isEmailValid) {
      myform.email.style.border = "1px solid red";
      document.getElementById("email-Valid").style.display = "block";
    } else {
      myform.email.style.border = "1px solid #E1E1E1";
      document.getElementById("email-Valid").style.display = "none";
    }

    if (!isMessageValid) {
      myform.message.style.border = "1px solid red";
      document.getElementById("message-Valid").style.display = "block";
    } else {
      myform.message.style.border = "1px solid #E1E1E1";
      document.getElementById("message-Valid").style.display = "none";
    }

    if (isNameValid && isEmailValid && isMessageValid) {
      const AddContact = {
        name: myform.contactname.value,
        email: myform.email.value,
        message: myform.message.value,
      };

      axios
        .post(`http://localhost:8080/contact`, AddContact)
        .then((response) => console.log(response.data))
        .then(
          ((document.getElementById("background").style.display = "block"),
          (document.getElementById("notification").style.display = "block"))
        );
      myform.reset();
    }
  };

  function hiddenComponent(){
    document.getElementById("background").style.display = "none";
  }

  return (
    <>
      <section className="contact">
        <div className="contact__hero">
          <div className="contact__hero-Wrap">
            <p className="contact__hero-title">Contact us</p>
            <p className="contact__hero-text">
              Questions? Applying to be a volunteer? Send us an email.
            </p>
          </div>
        </div>

        <div className="contact__form">
          <form className="form__contactdetails" onSubmit={handleSubmit}>
            <div className="form__container">
              <div className="form__detail">
                <label className="form__label">Contact Name</label>
                <input
                  className="form__input"
                  //   defaultValue={whItem.contact_name}
                  name="contactname"
                ></input>

                <div className="contactname-Valid" id="contactname-Valid">
                  <img
                    className="contactname-Valid__img"
                    src={error}
                    alt="error"
                  />
                  <span className="contactname-Valid__text">
                    This field is required
                  </span>
                </div>
              </div>
              <div className="form__detail">
                <label className="form__label">Email</label>
                <input
                  className="form__input"
                  //   defaultValue={whItem.contact_email}
                  name="email"
                ></input>

                <div className="email-Valid" id="email-Valid">
                  <img className="email-Valid__img" src={error} alt="error" />
                  <span className="email-Valid__text">
                    This field is required
                  </span>
                </div>
              </div>
              <div className="form__detail">
                <label className="form__label">Message</label>
                <textarea
                  className="form__message"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="message-Valid" id="message-Valid">
                  <img className="message-Valid__img" src={error} alt="error" />
                  <span className="message-Valid__text">
                    This field is required
                  </span>
                </div>
              </div>
            </div>
            <button className="form__button">SUBMIT</button>
          </form>
          <div className="contact__form-img">
            <img
              className="contact__form-picture"
              src={contact}
              alt="volunteer"
            />
          </div>
        </div>
      </section>

      <section id="background" className="background">
        <div className="notification" id="notification">
          <img
            className="notification__img"
            src={close}
            alt="close"
            onClick={() => hiddenComponent()}
          />
          <p className="notification__text">
            Thank you for contacting us, we will get back to you soon!
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
