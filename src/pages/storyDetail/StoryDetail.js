import "./storyDetail.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const searchByStoryID = (id) => `http://localhost:8080/stories/${id}`;

function StoryDetail() {
  const { id } = useParams();
  const [storyDetails, setStoryDetails] = useState({});
  const [storyComment, setStoryComment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // get story data by ID from API
      const { data } = await axios.get(searchByStoryID(id));
      setStoryDetails(data);
      const comments = await axios.get(
        `http://localhost:8080/stories/${id}/comments`
      );
      setStoryComment(comments.data);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myform = event.currentTarget;
    const current_time = new Date().toISOString().replace("Z", "");
    const commentToAdd = {
      created_at: current_time,
      name: myform.formname.value,
      content: myform.comment.value,
    };

    const response = await axios.post(
      `http://localhost:8080/stories/${id}/comments`,
      commentToAdd
    );
    const data = response.data;
    const commentId = data.id;
    commentToAdd["id"] = commentId;
    const newComments = storyComment.slice();
    newComments.unshift(commentToAdd);
    setStoryComment(newComments);
    myform.reset();
  };

  return (
    <>
      <section className="storybook">
        <iframe
          allowfullscreen=""
          frameborder="0"
          height="600"
          id="bookshare-iframe"
          onLoad="this.focus()"
          scrolling="no"
          src={storyDetails.address}
          width="900"
        ></iframe>

        <div className="storybook__intro">
          <p className="storybook__intro-name">
            Story Name: {storyDetails.name}{" "}
          </p>
          <p className="storybook__intro-author">
            Author: {storyDetails.author}
          </p>
          <p className="storybook__intro-illustrator">
            illustrator: {storyDetails.illustrator}
          </p>
          <p className="storybook__intro-region">
            Region : {storyDetails.region}
          </p>
        </div>
      </section>

      {storyComment.slice(0, 3).map((comment) => (
        <section className="comments" key={comment.id}>
          <div className="comments__detail">
            <div className="comments__picture"></div>
            <article className="comments__text">
              <div className="comments__text--container">
                <span className="comments__text--name">{comment.name}</span>
                <span className="comments__text--time">
                  {new Date(comment.created_at).toLocaleDateString("en-US")}
                </span>
              </div>
              <span className="comments__text--content">{comment.content}</span>
            </article>
          </div>
        </section>
      ))}

      <section className="storybook__comment">
        <section class="commentform">
          <h1 class="commentform__head">Do you like the story?</h1>

          <div class="commentform__container">
            <div class="commentform__picture"></div>

            <form
              class="commentformone"
              id="commentform"
              onSubmit={handleSubmit}
            >
              <div class="commentform__content">
                <div class="commentform__name">
                  <label class="commentform__name--text" htmlFor="name">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="formname"
                    placeholder="Enter your name"
                  />
                </div>

                <div class="commentform__comment">
                  <label class="commentform__comment--text" for="comment">
                    COMMENT
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder="Add a new comment"
                  ></textarea>
                </div>
                <div class="buttonright">
                  <button class="commentform__button" type="submit">
                    COMMENT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default StoryDetail;
