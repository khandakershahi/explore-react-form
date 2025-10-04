import React from 'react';
import Cousin from './Cousin';

const Aunt = ({ name, asset }) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin asset={asset} name="Tomy"></Cousin>
                <Cousin name="Child 2"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;