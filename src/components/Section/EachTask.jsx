

const EachTask = ({ item, onToggle, onDelete, style }) => {
    return (
        <div className="card hover:border-blue-500 p-3 sm:p-4 hover:shadow-md group" style={style}>
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">

                {/* checkbox for completed */}
                <button onClick={() => onToggle(item.id)} className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center mt-0.5 sm:mt-0 ${item.completed ? "bg-green-500 border-green-500" : "border-gray-300 hover:border-blue-500"}`}>
                    {
                        item.completed && (
                            <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        )
                    }

                </button>



                {/* task text */}

                <div className=" flex-1 min-w-0">

                    <p className={`text-sm sm:text-base   transition-all duration-200 break-words ${item.completed ? "text-slate-400 line-through" : "text-gray-900"}`}>
                        {item.text}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1" >
                        {new Date(item.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}

                    </p>

                </div>


                {/* delete button */}
                <button onClick={() => onDelete(item.id)} className="delete-task   py-1.5 flex-shrink-0 px-2 sm:px-3 text-xs sm:text-sm">
                    <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>

                </button>



            </div>

        </div>
    );
};

export default EachTask;