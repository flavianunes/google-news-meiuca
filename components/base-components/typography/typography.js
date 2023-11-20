import classNames from "classnames";
import styles from "./typography.module.scss";

function Typography({ tag, variant, children, className }) {
  const Element = tag;
  const style = `${styles.typography} ${styles[variant]}`;

  return <Element className={classNames(style, className)}>{children}</Element>;
}

export default Typography;
