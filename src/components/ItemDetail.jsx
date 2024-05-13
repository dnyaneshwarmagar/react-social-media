import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../app/postsSlice";
import { setDetails } from "../app/detailSlice";
import shareImg from "./../assets/share.png";
import heartImg from "./../assets/heart.png";

const ItemDetail = () => {
  const [showId, setShowId] = useState(false);
  const { details } = useSelector((state) => state.details);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { posts, status, errorMsg } = useSelector((state) => state.posts);
  posts = posts.filter((post) => post.id !== details.id);

  useEffect(() => {
    dispatch(getPosts());
    if(details === ""){
      navigate("/")
    }
  }, []);

  function handleClick(post) {
    console.log("post:", post);
    dispatch(setDetails(post));
    navigate(`/item/${post.id}`);
    scrollToTop();
  }
  if (status === "loading") {
    console.log("loading");
    return <p>Loading..</p>;
  } else if (status === "error") {
    console.log(errorMsg, "error home comp");
    return <p>{errorMsg} </p>;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="details_box">
      <h1>Post Number #{details.id}</h1>
      <div className="details_div">
        <div className="img_div">
          <img src={details.imgSrc} alt="" />
          <h2>{details.title?.slice(0, 15)}...</h2>
          <img src={shareImg} alt="img" />
          <img src={heartImg} alt="img" />
        </div>
        <div className="info_div">
          <div>
            <button
              className={showId ? "btn_bg_sec_class" : "btn_bg_first_class"}
              onClick={() => setShowId(false)}
            >
              Details
            </button>
            <button
              className={showId ? "btn_bg_first_class" : "btn_bg_sec_class"}
              onClick={() => setShowId(true)}
            >
              User Info
            </button>
          </div>
          {showId ? (
            <p className="gray_text_class">
              Post Was Posted By {details.userId}
            </p>
          ) : (
            <>
              <p className="gray_text_class">{details.title}</p>
              <p className="gray_text_class">{details.body}</p>
            </>
          )}
        </div>
      </div>
      <h1>More Posts</h1>
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

export default ItemDetail;
