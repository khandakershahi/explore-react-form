import React, { useContext } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ name, asset }) => {

    const [money, setMoney] = useContext(MoneyContext);

    const handleAddMoney = () => {
        setMoney(money + 5000)
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin asset={asset} name="Tomy"></Cousin>
                <Cousin name="Jo JO"></Cousin>
                <button onClick={handleAddMoney}>Add 5000 tk </button>
            </section>
        </div>
    );
};

export default Aunt;