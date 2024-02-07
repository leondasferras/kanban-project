import styles from './openTask.module.css'
import Checkbox from '../../../../ui/Checkbox/checkbox'
import Dropdown from '../../../../ui/Dropdown/dropdown'
import KebabBtn from '../../../../ui/KebabBtn/KebabBtn'



const OpenTask = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <p className='heading_L'>
           Research pricing points of various competitors and trial different business models
      </p>
      <KebabBtn/>
    </div>
    <p className={`${ styles.text} text_medium`}> 
        We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</p>
    
    <ul className={`${ styles.subtasks} text_bold`}>
      Subtasks(2 of 3)
      <li>
        <Checkbox/>
      </li>
      <li>
        <Checkbox/>
      </li>
      <li>
        <Checkbox/>
      </li>
    </ul>
    <Dropdown options={['jkjl', '123123', '54534534']} />

    </>
  )
}


export default OpenTask