import React from 'react';

const Header = () => {
    return (
        <header className='text-center mb-8 sm:mb-10 md:mb-12 '>
            <h1 className='font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-2 px-2'>Task Manager</h1>

            <p className='text-gray-400 text-base md:text-lg mb-4 sm:mb-8 px-2'>
                Stay organized and productive 

            </p>
            
        </header>
    );
};

export default Header;