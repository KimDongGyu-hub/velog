import { useState } from "react";
import { Card } from "./Card/Card";
import { Modal } from "./Modal/Modal";
import { Form } from "./Form/Form";
import { postData } from "../DUMMY_DATA";

export function Main({ contents, posts, onAddPost, setContents }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [data, setData] = useState(postData);

  // useEffect(() => {
  //   const data = localStorage.getItem("postData");
  //   if (data) {
  //     const posts = JSON.parse(data);
  //     setData(posts);
  //   } else {
  //     localStorage.setItem("postData", postData);
  //     setData(postData);
  //   }
  // }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      {contents ? ( // 새 글 작성 모드일 때
        <Form onAddPost={onAddPost} />
      ) : (
        <div>
          {posts.map((card, index) => (
            <div key={index} onClick={() => handleCardClick(card)}>
              <Card {...card} />
            </div>
          ))}
        </div>
      )}

      {selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCard.title}
          content={selectedCard.content}
          image={selectedCard.image}
        />
      )}
    </>
  );
}
