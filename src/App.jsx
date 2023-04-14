import {Header} from './components/Header.jsx'
import {NoTasks} from './components/NoTasks.jsx'
import {Tasks} from './components/Tasks.jsx'
import {Confetti} from './components/Confetti';

import styles from './App.module.css'
import './global.css'

import plus from './assets/plus.svg'
import book from './assets/book.svg'
import vector from './assets/Vector.svg'

import {Trash, TrendUp} from 'phosphor-react'
import ReactConfetti from 'react-confetti';
import uuid from 'react-uuid';
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';
import {useState, useEffect} from 'react';


export function App() {

  const [tasks, setTasks] = useState (() => {
    const savedTasksCreated = localStorage.getItem('Tasks');
    const initialValue = JSON.parse(savedTasksCreated);
    return initialValue || [];
})

  const [numberOfTasksComplete,setNumberOfTasksComplete] = useState (() => {
    const savedNumberOfTasksComplete = localStorage.getItem('numberOfTasksComplete');
    const initialValue = JSON.parse(savedNumberOfTasksComplete);
    return initialValue || (0);
})
  const [newTaskText, setNewTaskText] = useState('');
  
  const numberOfTasks = tasks.length;
  
  const isNewTaskEmpty = newTaskText.length === 0;
 
  const tasksCreateAndDone = numberOfTasksComplete && numberOfTasks;
  
  const allTasksConclude = numberOfTasksComplete === numberOfTasks && tasksCreateAndDone !== 0;
  
  const showNoTasks = tasks.length === 0;



  function userCreateNewTask(event) {
      
    event.preventDefault()   
    const newTaskText = event.target.typedTask.value;

    let newArrayTask = [...tasks];
    newArrayTask.push({
      id: uuid(),
      content: newTaskText,
      isConclude: false
    })
    
    setTasks(newArrayTask)
    setNewTaskText('');
  
}


  function userNewTaskChange() {
    
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
}

  
  function userNewTaskInvalid() {
   
    event.target.setCustomValidity('Esse campo é obrigatório! Adicione uma nova tarefa.');
}
 


  function userMarkTaskAsComplete(id){
  const taskComplete = tasks.map(task => {
    if (task.id === id) {
      return {...task, isConclude: !task.isConclude}
    }
    return task
  })
  setTasks(taskComplete)
}

  useEffect (() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
  },[tasks])

  
  useEffect (() => {
    localStorage.setItem('numberOfTasksComplete', JSON.stringify(numberOfTasksComplete))
  },[numberOfTasksComplete])





return (

<div>
  <div>
    <Header/>
  </div>
      

  <div>
    <form className={styles.newtask} onSubmit={userCreateNewTask}>
      
      <input 
        type="text" 
        name="typedTask" 
        placeholder='Adicione uma nova tarefa'
        value={newTaskText}
        onChange={userNewTaskChange}
        onInvalid={userNewTaskInvalid} 
        required
        className={styles.textplace}            
      />
                
      <button 
        type="submit" 
        value="Criar" 
        disabled={isNewTaskEmpty}
        className={styles.buttonsubmit}>
        Criar 
        <img src={plus} alt="Plus simbol" className={styles.simbolplus} />
                    
      </button>  
    </form>

    <div>
      <div className={styles.statustotal}>
        <div className={styles.statustasks}>
          <p className={styles.taskscreate}>Tarefas criadas<span className={styles.number}>{numberOfTasks}</span></p>
          <p className={styles.tasksdone}>Concluídas <span className={styles.number} > {numberOfTasksComplete} de {numberOfTasks}</span></p>
        </div>            
      </div>
    </div>
      
    <div>
      {
        tasks.map(task => {
        return (
          <Tasks 
            key={task.id}
            id={task.id} 
            content={task.content}
            isConclude={task.isConclude}
            tasks={tasks}
            setTasks={setTasks}
            userMarkTaskAsComplete={() => userMarkTaskAsComplete(task.id)}
            numberOfTasksComplete={numberOfTasksComplete}
            setNumberOfTasksComplete={setNumberOfTasksComplete}

          />
        )})
      }
    </div>

  </div>

  <div>
    { showNoTasks && <NoTasks/> }
  </div>
  <div>{ allTasksConclude && <Confetti/>}</div>
</div>

)}

