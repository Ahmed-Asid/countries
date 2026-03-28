import React from 'react';

const Count = ({ countries, visited, notVisited }) => {
    return (
        <div className='text-sm font-bold text-blue-800 fixed ml-5 bg-white p-1 rounded-md shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300 ease-in-out hover:scale-110'>
            <p>Countries: {countries.length}</p>
            <p>Visited: {visited.length}</p>
            <p>Not Visited: {notVisited.length}</p>
        </div>
    );
};

export default Count;