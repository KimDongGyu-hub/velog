import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";
import { postData } from "./DUMMY_DATA";

function App() {
  const [tranding, setTranDing] = useState("trending");
  const [contents, setContents] = useState(false);
  const [posts, setPosts] = useState(postData[tranding]);
  const [allPosts, setAllPosts] = useState(postData);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setAllPosts((prev) => ({
      ...prev,
      [tranding]: [...prev[tranding], newPost],
    }));
    setContents(false);
  };

  const handleTrandingChange = (newTranding) => {
    setTranDing(newTranding);
    setPosts(allPosts[newTranding]);
  };

  return (
    <div className="body">
      <Header
        setTranDing={handleTrandingChange}
        tranDing={tranding}
        contents={contents}
        setContents={setContents}
      />
      <Main
        posts={posts}
        contents={contents}
        setContents={setContents} // 글 작성 폼 닫기
        onAddPost={handleAddPost} // 글 추가 함수 전달
      />
    </div>
  );
}

export default App;
