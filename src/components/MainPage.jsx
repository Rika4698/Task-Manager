import AddTask from "./Section/AddTask";
import Header from "./Section/Header";


const MainPage = () => {
    return (
        <div className="max-w-4xl mx-auto ">
            <Header/>

            <div>
           <AddTask />

            </div>
            
        </div>
    );
};

export default MainPage;