import styles from "./textbox.module.css";

const TextBox = ({ title, subtitle, text, className }) => {
  return (
    <div className={styles.textBoxContainer}>
      <div className={`${styles.textBox} ${className || ""}`}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default TextBox;
