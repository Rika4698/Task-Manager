

const EachTask = ({item, onToggle , style}) => {
    return (
        <div className="card hover:border-blue-500 p-3 sm:p-4 hover:shadow-md group" style={style}>
        <div className="flex items-start sm:text-center gap-3 sm:gap-4">
             
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

            <div className=" min-w-0">

                <p className={`text-sm sm:text-base text-left transition-all duration-200 break-words ${item.completed? "text-slate-400 line-through": "text-gray-900"}`}>
                 {item.text}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1" >
                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                        month:'short',
                        day:'numeric',
                        year:'numeric',
                        hour:'2-digit',
                        minute:'2-digit'
                    })}

                </p>

            </div>



        </div>
            
        </div>
    );
};

export default EachTask;