
import EachTask from './EachTask';

const TaskList = ({task, onToggle, deleteTask}) => {
    return (
        <div className='space-y-2 sm:spa-y-3'>
          {
            task.map ((item, index) => (
                <EachTask key={item.id} item={item} onToggle={onToggle} onDelete={deleteTask} style={{animationDelay: `${index * 50}ms`}}/>
            ))
          }  
        </div>
    );
};

export default TaskList;