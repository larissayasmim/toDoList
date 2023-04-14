import styles from './NoTasks.module.css'

import book from '../assets/book.svg'
import plus from '../assets/plus.svg'



export function NoTasks() {
    return ( 

        <div>  
                
            <div className={styles.none}>
                <div className={styles.mural} >
                    <img src={book} alt="" className={styles.muralimg} />
                    <p  className={styles.muralfraseum}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>  
            

                
        </div>     
        

   
      
    )
}


