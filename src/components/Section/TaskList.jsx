
import EachTask from './EachTask';

const TaskList = ({ task, onToggle, deleteTask }) => {
    return (
        <div className='space-y-2 sm:spa-y-3'>
            {
                task.map((item) => (
                    <EachTask key={item.id} item={item} onToggle={onToggle} onDelete={deleteTask} />
                ))
            }
        </div>
    );
};

export default TaskList;