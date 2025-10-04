import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password);



    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameOnChange} defaultValue={name} type="text" name='name' placeholder='Name' />
                <br />
                <input onChange={emailOnChange} defaultValue={email} type="email" name="email" placeholder='Email' />
                <br />
                <input onChange={passwordOnChange} defaultValue={password} type="password" name="password" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;