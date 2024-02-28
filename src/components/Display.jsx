import styles from "./Display.module.css";

function Display({displayVal}) {
  return <input type="text" className={styles.inputDisplay} value={displayVal} readOnly />;
}
export default Display;
