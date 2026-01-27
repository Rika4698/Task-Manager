
import EachTask from './EachTask';

const TaskList = ({task, onToggle}) => {
    return (
        <div>
          {
            task.map ((item, index) => (
                <EachTask key={item.id} item={item} onToggle={onToggle} style={{animationDelay: `${index * 50}ms`}}/>
            ))
          }  
        </div>
    );
};

export default TaskList;