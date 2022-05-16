import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Tender la cama',
        fecha: 'Hoy',
        recordatorio: true
      },
      {
        id: 2,
        text: 'Lavar Ropa',
        fecha: 'Mañana',
        recordatorio: true
      },
      {
        id: 3,
        text: 'Dejar el AirTag',
        fecha: 'Sábado',
        recordatorio: false
      }
    ]
  );
  const [showForm, setShowForm] = useState(false);

  //Añadir tarea
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }
  //Eliminar tarea 
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  //Cambia recordatorio
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, recordatorio: !task.recordatorio } : task))
  }
  return (
    <div className="container">
      <Header titulo='Task Manager' onShow={() => setShowForm(!showForm)} show={showForm} />
      {showForm ? <AddTask onAdd={addTask}></AddTask> : <></>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
