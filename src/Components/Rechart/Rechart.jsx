// import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
const Rechart = () => {
    const data = [
        { id: 1, name: 'Abdullah Rahman', bangla: 85, english: 78, math: 92 },
        { id: 2, name: 'Fatima Akter', bangla: 90, english: 85, math: 88 },
        { id: 3, name: 'Mehdi Hasan', bangla: 78, english: 92, math: 95 },
        { id: 4, name: 'Nusrat Jahan', bangla: 82, english: 80, math: 91 },
        { id: 5, name: 'Rahim Mia', bangla: 88, english: 87, math: 89 },
        { id: 6, name: 'Aisha Khanam', bangla: 95, english: 89, math: 94 },
        { id: 7, name: 'Rahat Islam', bangla: 75, english: 79, math: 86 },
        { id: 8, name: 'Tasnim Ahmed', bangla: 93, english: 94, math: 98 },
        { id: 9, name: 'Sadia Akhter', bangla: 86, english: 88, math: 90 },
        { id: 10, name: 'Shahidul Islam', bangla: 91, english: 93, math: 96 },
        { id: 11, name: 'Farida Begum', bangla: 79, english: 82, math: 87 },
        { id: 12, name: 'Mahmudul Hasan', bangla: 84, english: 91, math: 83 },
    ];
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="name" fill="hotpink" stroke="#8884d8" />
                    <Bar dataKey="bangla" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="math" stroke="#ff7300" />
                    <Scatter dataKey="english" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Rechart;