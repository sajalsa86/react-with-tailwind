// import React from 'react';

import Features from "../Features/Features";

const PriceCard = ({ price }) => {
    return (
        // tow way button possition thik korte pari
        //1. div className="flex flex-col"> and button className="mt-auto"
        //1. div className="relative"> and button className="absolute buttom-0"
        <div className="bg-indigo-400 mt-4 rounded-md p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col">
            <h2 className="text-center ">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-700">{price.price}</span>
                <span className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-white">/Month</span>
            </h2>
            <h5 className="text-indigo-700 text-center my-2 sm:my-3 md:my-4 lg:my-6 text-lg sm:text-xl md:text-xl lg:text-2xl font-bold">{price.name}</h5>
            <p className="capitalize text-xl font-bold underline text-white">features : </p>
            {price.features.map((feature, idx) => <Features
                key={idx}
                feature={feature}
            ></Features>)}
            <button className="hover:bg-purple-500 capitalize w-full mt-auto font-bold text-white bg-purple-600 p-3 rounded">buy now</button>
        </div>
    );
};

export default PriceCard;


