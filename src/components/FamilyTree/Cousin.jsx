import React from 'react';
import Special from './Special';
import Friends from './Friends';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tomy' && <Special asset={asset}>Special: {asset}</Special>
            }
            {
                name == 'Jo JO' && <Friends></Friends>
            }
        </div>
    );
};

export default Cousin;