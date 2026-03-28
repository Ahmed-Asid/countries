import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ countries }) => {
    const chartData = countries.map(c => ({
        name: c.cca3.cca3,
        population: c.population.population,
        area: c.area.area
    }))
    return (
        <div className='w-125 flex justify-center mt-86 ml-3 rounded-xl bg-gray-100 fixed shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] p-2'>
            <BarChart width={450} height={300} margin={10} data={chartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="population"></YAxis>
                <YAxis dataKey="area"></YAxis>
                <Tooltip />
                <Bar dataKey="population" fill="#8884d8" />
                <Bar dataKey="area" fill='#22c55e'></Bar>
            </BarChart>
        </div>
    );
};

export default Chart;