import styles from "../styles/ModalProductAdded.module.css";
import { GiCheckMark } from "react-icons/gi";

const ModalProductAdded = ({setModalProductAdded}) => {

    const closeModal = () => {
        setModalProductAdded(false)
    }

  return (
    <div className={styles.modal}>
        <p>Your item has been added to the shopping cart</p>
        <GiCheckMark className={styles.check}/>
        <button onClick={closeModal}>Accept</button>
    </div>
  )
}

export default ModalProductAdded