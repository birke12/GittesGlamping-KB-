import styles from "./Introduction.module.css";

const Introduction = ({
  title,
  text,
  imageSrc,
  buttonText,
  onButtonClick,
  hideImage = false,
  hideButton = false,
  extraTextMargin = false,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p
        className={`${styles.text} ${
          extraTextMargin ? styles.extraTextMargin : ""
        }`}
      >
        {text}
      </p>

      {!hideImage && (
        <img src={imageSrc} alt="Profile" className={styles.image} />
      )}

      {!hideButton && (
        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Introduction;
