import styles from "./Modal.module.css";

export function Modal({ isOpen, onClose, title, content, image }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
        <h2>{title}</h2>
        {image && (
          <img
            src={image}
            alt="Modal Content"
            className={styles.modalImage} // CSS 클래스 적용
          />
        )}
        <p>{content}</p>
      </div>
    </div>
  );
}
