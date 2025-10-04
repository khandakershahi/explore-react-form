import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value, e.target.email.value);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' name='name' />
                <br />
                <input type="email" name="email" id="" placeholder='your email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;