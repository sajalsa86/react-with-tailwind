// import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const Dashboard = () => {

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
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="bangla" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="english" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="math" stroke="red" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;
