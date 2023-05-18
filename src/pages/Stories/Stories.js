import "./stories.scss";
import books from "../../assets/images/books2.jpeg";
import bookicon from "../../assets/icons/book.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";


function Stories(){
  // get stories by API



  // const SEARCH_URL = `http://localhost:8080/stories`;
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await axios.get(SEARCH_URL);
        setStories(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchStories();
  }, []);

  return (
    <>
      <section className="stories">
        <div className="stories__container">
          <div className="stories_imgWrap">
            <img className="stories__img" src={books} alt="stories picture" />
          </div>

          <div className="stories__textWrap">
            <div className="stories__title">
              <div className="stories__title-contanier">
                <h1 className="stories__title-numberTitle">9</h1>
                <p className="stories__title-numberText">languages</p>
              </div>

              <div className="stories__title-contanier">
                <h1 className="stories__title-numberTitle">35</h1>
                <p className="stories__title-numberText">Published Books</p>
              </div>

              <div className="stories__title-contanier">
                <h1 className="stories__title-numberTitle">23</h1>
                <p className="stories__title-numberText">Countries</p>
              </div>
            </div>

            <p className="stories__text">
              Selected stories are published and made available to be purchased,
              generating a
              <span className="stories__text-highlight">
                {" "}
                self-supportive, entrepreneurial{" "}
              </span>
              model. All proceeds from the publications are reinvested into the
              local communities.
            </p>
          </div>
        </div>

        <section className="stories__display">
          <div className="stories__display-title">
            <img
              className="stories__display-title-img"
              src={bookicon}
              alt="bookicon"
            />
            <h1 className="stories__display-title-text">OUR STORIES</h1>
          </div>

          <div className="stories__display-book">
            {stories.map((story) => (
              <div className="stories__display-book-container" key={story.id}>
                <Link to={"/stories/" + story.id}>
                  <div className="stories__display-book-imgWrap">
                    <img
                      className="stories__display-book-img"
                      src={"http://localhost:8080/stories-image/" + story.image}
                      alt="story img"
                    />
                  </div>
                </Link>

                <div className="stories__display-book-text-Container">
                  <p className="stories__display-book-name">
                    Story Name: {story.name}
                  </p>
                  <p className="stories__display-book-country">
                    Country: {story.region}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}


export default Stories;