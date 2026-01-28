

const EmptySection = ({ message, label }) => {
    return (
        <div className="card p-8 sm:p-10 md:p-12 text-center">
            <div className="max-w-sm mx-auto px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-600">{message}</h3>
                <p className="text-sm sm:text-base  text-gray-400">{label}</p>
            </div>
        </div>
    );
};

export default EmptySection;