import React from 'react';
import Header from '../components/Header';
import RightNav from '../components/layout-component/RightNav';

const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2>Dragon News</h2>
                </section>
                <aside className='col-span-3'>
                    <RightNav/>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;