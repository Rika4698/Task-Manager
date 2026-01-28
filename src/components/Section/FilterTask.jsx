

const FilterTask = ({currentFilter, setFilter , counts}) => {

    const tabs = [
        {id:"all", label:"All Tasks", count:counts.all},
        {id:"pending", label:"Pending", count:counts.pending},
        {id:"completed", label: "Completed", count:counts.completed}
    ]
    return (
        <div className="card p-2">
            <div className="flex flex-col sm:flex-row gap-2">
                {tabs.map((filter) => (

                    <button key={filter.id} onClick={()=> setFilter(filter.id)} className={`flex-1  px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${currentFilter === filter.id ? "bg-gradient-to-tr from-sky-600 to-purple-700 text-white shadow-sm border-2 border-purple-800": "text-gray-500 hover:bg-gray-100 border-2 border-gray-200"}`}>

                        <span className="block sm:inline">{filter.label}</span>
                        <span className={`ml-2 text-xs sm:text-sm font-semibold ${currentFilter === filter.id ? "text-white": "text-gray-400"}`}>({filter.count})</span>

                    </button>
                ))}

            </div>
            
        </div>
    );
};

export default FilterTask;