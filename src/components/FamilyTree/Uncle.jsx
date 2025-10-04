import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Child 1'></Cousin>
                <Cousin name='child 2'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;