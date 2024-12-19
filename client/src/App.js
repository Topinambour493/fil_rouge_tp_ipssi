import React, {useState} from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  const [reloadPosts, setReloadPosts] = useState(true)

  function handleReloadPosts(){
    setReloadPosts(prevReloadPosts => !prevReloadPosts);
  }

  return (
    <div className="container">
      <h1>Créer un topic</h1>
      <PostCreate handleReloadPosts={handleReloadPosts}/>
      <hr />
      <h1>Sujet</h1>
      <PostList reloadPosts={reloadPosts} handleReloadPosts={handleReloadPosts}/>
    </div>
  );
};
export default App;
