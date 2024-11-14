import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-1 items-center bg-base-200 p-2'>
            <p className='bg-[#d72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, minima?</Link>
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, minima?</Link>
                <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, minima?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;