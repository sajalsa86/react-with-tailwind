// import React from 'react';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';
const Navbar = () => {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Assuming that 'menu.json' is a file path or a URL
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error("Error fetching menu.json:", error));
    }, []);

    return (
        <nav className='w-4/5 m-auto mb-5 p-4 rounded bg-gray-500'>
            <div className='md:hidden lg:hidden' onClick={() => setOpen(!open)}>
                {/* i use here hero icons */}
                <span>
                    {open === true ? <XMarkIcon className="h-6 w-6 text-white" /> :
                        <Bars3Icon className="h-6 w-6 text-white" />}
                </span>
            </div>

            <ul className={`${open ? 'top-14' : '-top-72'} bg-gray-500 -ml-3 rounded md:flex lg:flex absolute md:static lg:static duration-500`}>
                {items.map(item => <Link
                    key={item.id}
                    item={item}></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;
