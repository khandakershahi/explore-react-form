import React, { useContext } from 'react';
import { AssetContex } from './FamilyTree';

const Special = ({ name, asset }) => {
    const newAsset = useContext(AssetContex);

    // console.log('new asset', newAsset);


    return (
        <div>
            <h3>Speicial: {name}</h3>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>

        </div>
    );
};

export default Special;