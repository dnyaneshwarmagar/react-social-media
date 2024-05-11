import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../app/postsSlice';
import { setDetails } from '../app/detailSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts,status,errorMsg} = useSelector(state => state.posts);

  useEffect(()=>{
    dispatch(getPosts());
    
  },[]);
  
  function handleClick(post){
    console.log('post:', post)
    dispatch(setDetails(post));
    navigate(`/item/${post.id}`)
  }
  if(status === "loading"){
    console.log("loading");
    return <p>Loading..</p>
  }
  else if(status === "error"){
    console.log(errorMsg,"error home comp");
    return <p>{errorMsg} </p>
  }
  
  return (
    <div>
      { posts.length > 0?posts.map((post,index)=>(<div key={index} onClick={()=>handleClick(post)}><p>{post.title}</p>
      <img src={post.imgSrc} alt="" />
      </div>)):""}
    </div>
  )
}

export default Home