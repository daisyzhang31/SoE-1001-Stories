import React from "react";
import "./header.scss";
import SoE from "../../assets/logos/SoE-color-positive-transparent (clear-version) 2.png";
import Stories from "../../assets/logos/1001 Stories logo.png";
import menu from "../../assets/icons/menu.png";
import downArrow from "../../assets/icons/down-arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isNavDisplay, setIsNavDisplay] = useState(false);
  const [isSubDisplay, setIsSubDisplay] = useState(false);

  const showNav = () => {
    if (!isNavDisplay) {
      document.getElementById("nav-Tablet").style.display = "block";
      setIsNavDisplay(true);
    }else{
      document.getElementById("nav-Tablet").style.display = "none";
      setIsNavDisplay(false)
    }
  };

  const showSub = () => {
     if (!isSubDisplay) {
       document.getElementById("dropdown-content").style.display = "block";
       setIsSubDisplay(true);
     } else {
       document.getElementById("dropdown-content").style.display = "none";
       setIsSubDisplay(false);
     }
  }

    const showSubTwo = () => {
      if (!isSubDisplay) {
        document.getElementById("dropdown-content2").style.display = "block";
        setIsSubDisplay(true);
      } else {
        document.getElementById("dropdown-content2").style.display = "none";
        setIsSubDisplay(false);
      }
    };
  

  return (
    <>
      <section className="headbanner">
        <Link to="/">
          <div className="headbanner__logo">
            <img className="headbanner__logo-SoE" src={SoE} alt="SoE-Logo" />
            <img
              className="headbanner__logo-Stories"
              src={Stories}
              alt="1001Stories"
            />
          </div>
        </Link>

        <img
          className="headbanner__menuBar"
          src={menu}
          alt="menu-bar"
          onClick={() => showNav()}
        />

        <div className="headbanner__nav">
          <div className="headbanner__dropdown">
            <Link className="headbanner__subTitle-link" to={"/"}>
              <span className="headbanner__dropbtn">ABOUT 1001 STORIES</span>
            </Link>
            <div className="headbanner__dropdown-content">
              <Link className="headbanner__subTitle-link" to={"/mission"}>
                <span className="headbanner__subTitle">OUR MISSION</span>
              </Link>
              <Link className="headbanner__subTitle-link" to={"/team"}>
                <span className="headbanner__subTitle">OUR TEAM</span>
              </Link>
            </div>
          </div>
          <Link className="headbanner__title" to={"/stories"}>
            <span className="headbanner__title">OUR STORIES</span>
          </Link>
          <div className="headbanner__dropdown">
            <span className="headbanner__dropbtn">RECORDS</span>
            <div className="headbanner__dropdown-content">
              <Link className="headbanner__subTitle-link " to="/volunteer">
                <span className="headbanner__subTitle ">OUR VOLUNTEERS</span>
              </Link>
              <Link className="headbanner__subTitle-link " to="/storyteller">
                <span className="headbanner__subTitle">OUR STORYTELLERS</span>
              </Link>
              {/* <span className="headbanner__subTitle">Exhibitions</span> */}
            </div>
          </div>
          <Link className="headbanner__title" to="/outreach">
            <span className="headbanner__title">OUTREACH</span>
          </Link>
          <Link className="headbanner__title" to="/contact">
            <span className="headbanner__title">CONTACT US</span>
          </Link>
          <a
            className="headbanner__title donate"
            href="https://www.seedsofempowerment.org/donate/"
          >
            {" "}
            <span className="headbanner__title donate">DONATE</span>
          </a>
        </div>
      </section>

      <div className="headbanner__nav-Tablet" id="nav-Tablet">
        <div className="headbanner__dropdown">
          <Link className="headbanner__title-link" to={"/"}>
            <span className="headbanner__title">ABOUT 1001 STORIES</span>
          </Link>
          <img
            className="headbanner__title-img"
            src={downArrow}
            alt="arrowDown"
            onClick={() => showSub()}
          />
        </div>
        <div className="headbanner__dropdown-content" id="dropdown-content">
          <div className="headbanner__dropdown-content-wrap">
            <Link className="headbanner__subTitle-link" to={"/mission"}>
              <span className="headbanner__subTitle">OUR MISSION</span>
            </Link>
            <Link className="headbanner__subTitle-link" to={"/team"}>
              <span className="headbanner__subTitle">OUR TEAM</span>
            </Link>
          </div>
        </div>

        <div className="headbanner__title-link stories">
          <Link className="headbanner__title-link" to={"/stories"}>
            <span className="headbanner__title">OUR STORIES</span>
          </Link>
        </div>

        <div className="headbanner__dropdown">
          <span className="headbanner__title-R">RECORDS</span>
          <img
            className="headbanner__title-img"
            src={downArrow}
            alt="arrowDown"
            onClick={() => showSubTwo()}
          />
        </div>
        <div className="headbanner__dropdown-content" id="dropdown-content2">
          <div className="headbanner__dropdown-content-wrap">
            <Link className="headbanner__subTitle-link " to="/volunteer">
              <span className="headbanner__subTitle ">OUR VOLUNTEERS</span>
            </Link>
            <Link className="headbanner__subTitle-link " to="/storyteller">
              <span className="headbanner__subTitle">OUR STORYTELLERS</span>
            </Link>
          </div>
          {/* <span className="headbanner__subTitle">Exhibitions</span> */}
        </div>

        <div className="headbanner__wrap">
          {" "}
          <Link className="headbanner__title-link" to="/outreach">
            <span className="headbanner__title">OUTREACH</span>
          </Link>
          <Link className="headbanner__title-link" to="/contact">
            <span className="headbanner__title">CONTACT US</span>
          </Link>
          <a
            className="headbanner__title-link"
            href="https://www.seedsofempowerment.org/donate/"
          >
            <span className="headbanner__title donate">DONATE</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
