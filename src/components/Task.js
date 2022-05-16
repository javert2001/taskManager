import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={task.recordatorio ? 'task reminder' : 'task'}
            onDoubleClick={() => onToggle(task.id)} >
            <h3 id={task.id}>{task.text} <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} /></h3>
            <p>{task.fecha}</p>

        </div>
    )
}

export default Task