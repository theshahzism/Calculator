import styles from "./ButtonsContainer.module.css";
function ButtonsContainer({onButtonCLick}) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "=",
    "9",
    "0",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttons) => (
        <button className={styles.button} onClick={()=> onButtonCLick(buttons)}>{buttons}</button>
      ))}
    </div>
  );
}
export default ButtonsContainer;
