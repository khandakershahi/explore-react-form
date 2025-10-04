import React from 'react';
import Special from './Special';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tomy' && <Special asset={asset}>Special: {asset}</Special>
            }
        </div>
    );
};

export default Cousin;