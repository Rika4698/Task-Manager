import { useState } from "react";
import AddTask from "./Section/AddTask";
import Header from "./Section/Header";


const MainPage = () => {
    const [task, setTask] = useState([]);


// Add new task
    const addTask = (text) => {
        const newTask ={
            id:Date.now(),
            text:text,
            completed:false,
         
        };
        setTask([newTask, ...task]);
    };


    return (
        <div className="max-w-4xl mx-auto ">
            <Header/>

            <div>
           <AddTask addTask={addTask}/>

            </div>
            
        </div>
    );
};

export default MainPage;