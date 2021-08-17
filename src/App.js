import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id:1,
      text:'Doctors appointment',
      day:'feb 5th at 2:30pm',
      reminder: false
    },
    {
      id:2,
      text:'Meeting at School',
      day:'feb 6th at 4:30pm',
      reminder: true
    },
    {
      id:3,
      text:'Grocery Shoping',
      day:'feb 5th at 6:30pm',
      reminder: false
    }
  ])

//delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}
//change reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map(task => task.id === id ? {...task, reminder:!task.reminder}: task))
}
//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :( "No Tasks To Show")}
    </div>
  );
}

export default App;
