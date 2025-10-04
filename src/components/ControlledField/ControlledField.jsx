import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('')

    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if (password.length < 6) {
            setError('password must be 6 charecter or longer')
        } else {
            setError("");
        }

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handlePasswordOnChange = e => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // if (newPassword.length < 6) {
        //     setError('Password must be 6 characters or longer');
        // } else {
        //     setError('');
        // }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={name} placeholder='Name' onChange={handleNameChange} />
                <br />
                <input type="email" name="email" onChange={handleEmailChange} defaultValue={email} placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required onChange={handlePasswordOnChange} defaultValue={password} />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;