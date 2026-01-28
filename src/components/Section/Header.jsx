import React from 'react';

const Header = ({ totalTask, completedTask, pendingTask }) => {
    const completeRate = totalTask > 0 ? Math.round((completedTask / totalTask) * 100) : 0;
    return (
        <header className='text-center mb-8 sm:mb-10 md:mb-12 '>
            <h1 className='font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-2 px-2'>Task Manager</h1>

            <p className='text-gray-400 text-sm md:text-lg mb-4 sm:mb-8 px-2'>
                Stay organized and productive

            </p>

            {
                totalTask > 0 && (
                    <div className='card w-full sm:w-auto inline-block px-0 sm:px-6 md:px-8 py-3 sm:py-4 mx-2 sm:mx-0'>
                        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm'>

                            <div className='text-center min-w-[60px]'>
                                <div className='text-xl sm:text-2xl font-bold text-blue-600'>
                                    {totalTask}

                                </div>
                                <div className='text-gray-400 mt-1 text-xs sm:text-sm font-medium'>
                                    Total
                                </div>
                            </div>



                            <div className='h-12 w-px bg-gray-200' />

                            <div className='text-center min-w-[60px]'>
                                <div className='text-xl sm:text-2xl font-bold text-blue-600'>
                                    {pendingTask}
                                </div>
                                <div className='text-gray-400 mt-1 text-xs sm:text-sm font-medium'>Pending</div>

                            </div>

                            <div className='h-12 w-px bg-gray-200' />

                            <div className='text-center min-w-[60px]'>
                                <div className='text-xl sm:text-2xl font-bold text-green-600'>
                                    {completedTask}
                                </div>
                                <div className='text-gray-400 mt-1 text-xs sm:text-sm font-medium'>Completed</div>
                            </div>
                            <div className='h-12 w-px bg-gray-200' />

                            <div className='text-center min-w-[60px]'>
                                <div className='text-xl sm:text-2xl font-bold text-blue-600'>
                                    {completeRate}%
                                </div>
                                <div className='text-gray-400 mt-1 text-xs sm:text-sm font-medium'>Progress</div>
                            </div>

                        </div>


                    </div>
                )
            }

        </header>
    );
};

export default Header;