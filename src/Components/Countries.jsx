import React, { use } from 'react';
import Country from './Country';

const Countries = ({ dataPromise }) => {
    const data = use(dataPromise);
    const countries = data.data.countries;

    return (
        <div>
            <p className='text-4xl font-semibold text-center mt-5'>Total Countries: {countries.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 gap-3'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;