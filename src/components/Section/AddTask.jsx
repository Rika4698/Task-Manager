

const AddTask = () => {
    return (
        <div>

            <form className="flex flex-col sm:flex-row gap-2 md:gap-3">

                <input type="text" placeholder="Add New Task" className="input-task py-2.5 px-4 w-full text-sm md:test-base flex-1" autoFocus/>

                <button type="submit" className="add-task px-4 whitespace-nowrap w-full sm:w-auto text-sm md:text-base py-2.5 md:py-2 rounded-lg shadow hover:shadow-md transition-all duration-200 active:scale-95">
               Add Task
                </button>

            </form>
            
        </div>
    );
};

export default AddTask;