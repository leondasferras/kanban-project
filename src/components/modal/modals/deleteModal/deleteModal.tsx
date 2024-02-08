import styles from './deleteModal.module.css'
import Button from '../../../../ui/Button/button'


const DeleteModal = () => {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.header} heading_M`}>Delete this board?</p>
      <p className={` ${styles.text} text_medium`}> Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
      <div className={styles.buttonsWrapper}>
        <Button mode='destructive'> Delete</Button>
        <Button mode='secondary'> Cancel</Button>
      </div>
      
    </div>
  )
}

export default DeleteModal