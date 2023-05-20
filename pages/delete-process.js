import styles from "../styles/DeleteUser.module.css"

const DeleteProcess = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperFinal}>
                <div className={styles.supportText}>Your request has been initiated!</div>
                <div className={styles.Heading}>Our Support team</div>
                <div className={styles.supportText}>will contact you with in 24 hours regarding your account delete request!</div>
            </div>
        </div>
    );
}

export default DeleteProcess;