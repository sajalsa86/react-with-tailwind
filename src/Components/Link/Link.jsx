// import React from 'react';

const Link = (props) => {
    const { name, path } = props.item;
    return (
        <div>
            <li className="w-full md:w-28 lg:w-28 mr-16 p-2 rounded hover:bg-violet-600">
                <a className="text-white text-xl" href={path}>{name}</a>
            </li>
        </div>
    );
};

export default Link;