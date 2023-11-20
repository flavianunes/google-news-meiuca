import styles from "./button-link.module.scss";

function ButtonLink({ children, ...props }) {
  return (
    <a className={styles.button} {...props}>
      {children}
    </a>
  );
}

export default ButtonLink;
