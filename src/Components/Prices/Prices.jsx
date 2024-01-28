// import React from 'react';

import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const Prices = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div className="w-full lg:w-4/5 m-auto">
            <h2 className="capitalize rounded-md p-3 text-4xl lg:text-5xl text-purple-500 text-center bg-purple-300">Awesome Affordable Price</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {prices.map(price => (
                    <PriceCard
                        key={price.id} // Assuming each price has a unique id
                        price={price}
                    />
                ))}
            </div>
        </div>
    );
};


export default Prices;