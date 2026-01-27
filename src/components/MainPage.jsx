/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import AddTask from "./Section/AddTask";
import Header from "./Section/Header";
import FilterTask from "./Section/FilterTask";
import TaskList from "./Section/TaskList";


const MainPage = () => {
    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState("all");


// Add new task
    const addTask = (text) => {
        const newTask ={
            id:Date.now(),
            text:text,
            completed:false,
            createdAt: new Date().toISOString()
        };
        setTask([newTask, ...task]);
    };
    

    useEffect (() => {
        const saveTask = localStorage.getItem('task');

        if(saveTask){
            try{
                setTask(JSON.parse(saveTask));
            } catch (error){
                console.log('Error loading task from local storage:', error);
            }
        }
    }, []);



    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task));
    }, [task]);


    const filterTask = () => {
        switch (filter){
            case 'completed':
                return task.filter(task => task.completed);
            case 'pending':
                return task.filter(task => !task.completed);
            default:
                return task;    

        }
    };

    const filteredTask = filterTask();

    const checkbox = (taskId) => {
        setTask(task.map (item => item.id === taskId ? {...item, completed: !item.completed} : item));
    };

  //calculate task
    const totalTask = task.length;
    const totalFilterTask = filteredTask.length;
    const completeTask = task.filter(item => item.completed).length;
    const pendingTask = (totalTask - completeTask);


//delete task
    const deleteTask = (taskId) => {
        const isConfirm = window.confirm("Are you sure you want to delete this task?");
        if(isConfirm){
            setTask(task.filter(item => item.id !== taskId));
        alert("Task deleted successfully!");
        }
        
    };


    return (
        <div className="max-w-4xl mx-auto ">
            <Header/>

            <div className="space-y-4 sm:space-y-6">
           <AddTask addTask={addTask}/>

           {
            totalTask > 0 && (
                <FilterTask
                currentFilter={filter}
                setFilter={setFilter}
                counts={
                    {
                        all:totalTask,
                        pending:pendingTask,
                        completed:completeTask
                    }
                }
                />
            )
           }

           {
            totalFilterTask > 0 ? (
                <TaskList task ={filteredTask} onToggle={checkbox} deleteTask={deleteTask}/>
            ): ""
           }


            </div>
            
        </div>
    );
};

export default MainPage;