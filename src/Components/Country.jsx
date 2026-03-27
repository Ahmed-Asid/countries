import React, { useState } from 'react';

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () => setVisited(!visited);

    return (
        <div className='border-2 border-gray-400 rounded-lg p-5 bg-gray-200'>
            <div className='h-40'><img src={`${country.flags.flags.png}`} alt={`${country.flags.flags.alt}`} className='rounded-lg w-full h-full' /></div>
            <div>
                <p className='text-lg font-semibold'>{country.name.common}</p>
                <p className='text-md font-medium'>{country.capital.capital}</p>
                <p className='text-md font-medium'>{country.population.population}</p>
            </div>
            <div className={`rounded-md text-white text-center mt-1.5 p-1 ${visited ? 'bg-blue-500' : 'bg-black'}`} onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</div>
        </div>
    );
};

export default Country;