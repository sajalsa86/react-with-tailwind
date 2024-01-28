import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Phonbar = () => {
    const [phones, setPhones] = useState([]);
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1])
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            console.log(phoneData);
            setPhones(phoneData);
        })
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={phones}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <Bar dataKey="price" fill='hotpink'></Bar>
                    <CartesianGrid></CartesianGrid>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phonbar;