import React from "react";
import "./footer.scss";
import Stories from "../../assets/logos/1001 Stories logo.png";
import fb from "../../assets/icons/icon-facebook.png";
import Twitter from "../../assets/icons/icon-twitter.png";
import ins from "../../assets/icons/icon-instagram.png";



function Footer(){

    return (
      <>
        <section className="footer">
          <section className="footerpart__social">
            <img
              className="footerpart__social-img"
              src={Stories}
              alt="Stories"
            />

            <div className="footerpart__social-container">
              <a href="https://www.instagram.com/seeds.empowerment/">
                <img class="footerpart__Social-instagram" src={ins} alt="ins" />
              </a>
              <a href="https://www.facebook.com/Seeds.of.Empowerment/">
                <img
                  className="footerpart__Social-facebook"
                  src={fb}
                  alt="fb"
                />
              </a>{" "}
              <a href="https://twitter.com/seedsofempower">
                <img
                  className="footerpart__Social-twitter"
                  src={Twitter}
                  alt="Twitter"
                />
              </a>
            </div>
          </section>
          <div className="footer__text">© 2022 Seeds of Empowerment</div>
        </section>
      </>
    );
}

export default Footer;