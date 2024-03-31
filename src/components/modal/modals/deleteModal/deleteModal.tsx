import styles from './deleteModal.module.css'
import Button from '../../../../ui/Button/button'
import useTasks from '../../../../services/store'


const DeleteModal = ({onCancel, onDelete, subject}:{onCancel:()=>void, onDelete:()=>void, subject:string}) => {
  const { currentBoard, currentTask } = useTasks()
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.header} heading_M`}>Delete this {subject}?</p>
      { subject === 'board'?
       (<p className={` ${styles.text} text_medium`}> Are you sure you want to delete the {currentBoard} board? This action will remove all columns and tasks and cannot be reversed.</p>) :
      (<p className={` ${styles.text} text_medium`}> Are you sure you want to delete the {currentTask.taskName} task and its subtasks? This action cannot be reversed.</p>)
      }
      <div className={styles.buttonsWrapper}>
        <Button mode='destructive' onClick={onDelete}> Delete</Button>
        <Button mode='secondary' onClick={onCancel}> Cancel</Button>
      </div>
      
    </div>
  )
}

export default DeleteModal