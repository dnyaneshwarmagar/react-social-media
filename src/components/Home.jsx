import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../app/postsSlice";
import { setDetails } from "../app/detailSlice";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, status, errorMsg } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  function handleClick(post) {
    console.log("post:", post);
    dispatch(setDetails(post));
    navigate(`/item/${post.id}`);
  }
  if (status === "loading") {
    console.log("loading");
    return (
      <div className="loader_container">
        <Loader />
      </div>
    );
  } else if (status === "error") {
    console.log(errorMsg, "error home comp");
    return <div className="loader_container">
      <p style={{color:"red"}}>Something went wrong. Try again later.</p>
    <p style={{color:"red"}}>{errorMsg} </p>
  </div>;
  }

  return (
    <div className="home_container">
      <h1>Social Media For Travellers</h1>
      <input type="text" placeholder="Search here..." />
      <div className="grid_box">
        {posts.length > 0
          ? posts.map((post, index) => (
              <div key={index} onClick={() => handleClick(post)}>
                <img src={post.imgSrc} alt="img" />
                <div className="body_div">
                  <div>
                    <b className="title">
                      {post.title.length > 33
                        ? `${post.title.slice(0, 33)}...`
                        : post.title}
                    </b>
                    <p className="gray_text_class">
                      {post.body.length > 150 ? (
                        <>
                          {" "}
                          <span>{post.body.slice(0, 150)} </span>
                          <button>Read More...</button>
                        </>
                      ) : (
                        post.body
                      )}
                    </p>
                  </div>

                  <button></button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
