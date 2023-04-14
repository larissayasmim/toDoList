import {App} from '../App';
import {Confetti} from './Confetti';

import styles from './Tasks.module.css'

import vector from '../assets/Vector.svg'

import uuid from 'react-uuid';
import { Trash, TrendUp } from 'phosphor-react'
import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

export function Tasks ({content, id, isConclude, userMarkTaskAsComplete, numberOfTasksComplete, setNumberOfTasksComplete, tasks, setTasks}) {
  
  

    function userDeleteTask(id, isConclude) {

        const tasksWithoutDeleteOne = tasks.filter( remove => {
            return remove.id !== id;
})
        setTasks(tasksWithoutDeleteOne);
        setNumberOfTasksComplete( isConclude === true ? numberOfTasksComplete -1 : numberOfTasksComplete + 0 )        
}

    function markTaskAsCompleted() {
    
        userMarkTaskAsComplete();
        setNumberOfTasksComplete(!isConclude === true ? numberOfTasksComplete + 1 : numberOfTasksComplete - 1);      
}

return (   

    <article>
        <div className={styles.task} >     
            <div className={styles.taskblock}>

                <div> 
                    <button 
                    type="submit" 
                    value="Criar"
                    onClick={markTaskAsCompleted}
                    className={isConclude === false ? styles.buttonconfer : styles.buttonconferchecked} >
                    </button>
                </div>
                    
                <div className={styles.texttrash}  >
                    <span className={isConclude === false ? styles.tasktodo : styles.tasktododone }  onClick={markTaskAsCompleted}><p>{content}</p>
                    </span> 
                        
                    <div>
                    <Trash size={22}  className={styles.simboldelete} onClick={() => userDeleteTask(id, isConclude)}/>
                    </div>
                </div>
            </div> 
        </div>
    </article>
)}






















































































































