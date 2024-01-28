// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Example = () => {
    const myIcon = <FontAwesomeIcon icon={faCalendar} />
    const face = <FontAwesomeIcon icon={faFacebook} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />
    return (
        <div>
            <h1 className="w-3/6 text-center bg-lime-500 m-auto p-5 text-5xl">
                {myIcon} React with tailwind
            </h1>
            <div className='w-3/6 m-auto mt-4 flex justify-between'>
                <button className='bg-red-500 text-3xl p-3 rounded-lg border-lime-800 font-extrabold text-white'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">{face} Facebook</a></button>
                <button className='bg-green-500 text-3xl p-3 rounded-lg border-lime-800 font-extrabold text-white'>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">{youtube} youtube</a></button>
            </div>
        </div>
    );
};

export default Example;
