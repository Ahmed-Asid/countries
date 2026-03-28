import React from 'react';


const Country = ({ country, state, isVisited }) => {

    const handleVisited = () => {
        state(country, !isVisited);
    }

    return (
        <div className='border-2 border-gray-400 rounded-lg p-5 bg-gray-200 flex flex-col'>
            <div className='h-40'><img src={`${country.flags.flags.png}`} alt={`${country.flags.flags.alt}`} className='rounded-lg w-full h-full' /></div>
            <div className='flex-1'>
                <p className='text-lg font-semibold'>{country.name.common} {country.name.common === 'Israel' && '(STOLEN LAND)'}</p>
                <p className='text-md font-medium'>{country.capital.capital}</p>
                <p className='text-md font-medium'>{country.population.population}</p>
            </div>
            <div className={`rounded-md text-white text-center mt-1.5 p-1 ${isVisited ? 'bg-blue-500' : 'bg-black'}`} onClick={handleVisited}>{isVisited ? "Visited" : "Not Visited"}</div>
        </div>
    );
};

export default Country;