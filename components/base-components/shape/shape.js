import styles from "./shape.module.scss";

function Shape({ children }) {
  return <div className={styles.shape}> {children}</div>;
}

export default Shape;
