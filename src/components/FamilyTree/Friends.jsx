import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friends = () => {

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Friend</h3>
            <p>Family got: {money}</p>
        </div>
    );
};

export default Friends;