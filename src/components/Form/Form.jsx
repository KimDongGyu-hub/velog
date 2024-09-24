import { useState } from "react";

export function Form({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      image,
      author: "작성자",
      createdAt: new Date().toISOString(),
      likes: 0,
      userImage: "path/to/default/userImage.jpg",
      comments: 0,
    };

    onAddPost(newPost);

    // 입력값 초기화
    setTitle("");
    setContent("");
    setImage("");
    setIsModalOpen(true); // 모달을 열기 위해 상태 변경
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          required
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="이미지"
          required
        />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
          required
        />
        <button type="submit">작성하기</button> {/* 제출 버튼 추가 */}
      </form>

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>작성이 완료되었습니다!</h3>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}
