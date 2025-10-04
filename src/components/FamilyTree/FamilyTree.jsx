import React, { createContext } from 'react';
import Grandpa from './Grandpa';

import './FamilyTree.css';


export const AssetContex = createContext('')


const FamilyTree = () => {

    const asset = 'diamond';
    const newAsset = 'Gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContex.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContex.Provider>

        </div>
    );
};

export default FamilyTree;