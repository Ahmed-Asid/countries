import React, { use, useState } from 'react';
import Country from './Country';
import Chart from './Chart';
import Count from './Count';
import { ChartColumn } from 'lucide-react';


const Countries = ({ dataPromise }) => {
    const [visited, setVisited] = useState([]);
    const [active, setActive] = useState('all');
    const [chart, setChart] = useState(false)

    const displayChart = () => {
        const newChart = !chart;
        setChart(newChart)
    }

    const data = use(dataPromise);
    const countries = data.data.countries;
    let displayCountries = countries;
    const handleVisited = (country, isVisited) => {
        if (isVisited) {
            setVisited(v => {
                if (v.find(c => c.cca3 === country.cca3)) return v;
                return [...v, country];
            });
        }
        else {
            setVisited(v => v.filter(c => c.cca3.cca3 !== country.cca3.cca3))
        }
    }

    const notVisited = countries.filter(c => !visited.find(v => v.cca3.cca3 === c.cca3.cca3));

    if (active === 'visited') {
        displayCountries = visited;
    }
    else if (active === 'notVisited') {
        displayCountries = notVisited;
    }
    else {
        displayCountries = countries;
    }

    return (
        <div>
            <p className='text-4xl font-semibold text-center mt-5'>Total Countries: {countries.length}</p>
            <div className='fixed bg-gray-200 p-2 rounded-full ml-5 mt-70 shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300 ease-in-out hover:scale-110' onClick={displayChart}><ChartColumn></ChartColumn></div>
            <Count countries={countries} visited={visited} notVisited={notVisited}></Count>
            {
                chart && <Chart countries={visited}></Chart>
            }
            <div className='flex gap-2 justify-center mt-2'>
                <div className={`p-3 rounded-lg text-white ${active === 'all' ? 'bg-blue-500' : 'bg-gray-500'}`} onClick={() => setActive('all')}>All Countries</div>
                <div className={`p-3 rounded-lg text-white ${active === 'visited' ? 'bg-blue-500' : 'bg-gray-500'}`} onClick={() => setActive('visited')}>Visited Countries</div>
                <div className={`p-3 rounded-lg text-white ${active === 'notVisited' ? 'bg-blue-500' : 'bg-gray-500'}`} onClick={() => setActive('notVisited')}>Not Visited Countries</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 gap-3'>
                {
                    displayCountries.map(country => <Country key={country.cca3.cca3} country={country} state={handleVisited} isVisited={visited.some(c => c.cca3.cca3 === country.cca3.cca3)}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;