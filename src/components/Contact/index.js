import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';




function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
                console.log('errorMessage', errorMessage);
            }
        } else {

            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }

        }
        // isValid conditional statement

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        // setFormState({ ...formState, [e.target.name]: e.target.value })

    }
    console.log(formState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    return (

        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onClick={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" onBlur={handleChange} name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>
            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

            <button type="submit">Submit</button>
        </section>
    )
}

export default ContactForm;