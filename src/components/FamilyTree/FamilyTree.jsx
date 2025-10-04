import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

import './FamilyTree.css';


export const AssetContex = createContext('')
export const MoneyContext = createContext(0);


const FamilyTree = () => {

    const [money, setMony] = useState(0)

    const asset = 'diamond';
    const newAsset = 'Gold';


    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money, setMony]}>
                <AssetContex.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContex.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;

/**
 * 1. create a context using createContext with a default value
 * make sure you export the context to be used in othe files.
 * 2. 
 */