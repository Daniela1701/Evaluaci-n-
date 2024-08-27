import React, { useState } from 'react';

const Formulario = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validate = () => {
        let validationErrors = {};

        if (!/^[a-zA-Z]+$/.test(formValues.firstName)) {
            validationErrors.firstName = "First name must contain only letters";
        }

        if (!/^[a-zA-Z]+$/.test(formValues.lastName)) {
            validationErrors.lastName = "Last name must contain only letters";
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
            validationErrors.email = "Invalid email address";
        }

        if (!/^\d{9}$/.test(formValues.phoneNumber)) {
            validationErrors.phoneNumber = "Phone number must be 9 digits long";
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            alert(JSON.stringify(formValues, null, 2));
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className='formu'>
        <form onSubmit={handleSubmit} style={{ padding: '30px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <div className='bloque1'>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    style={{ width: '100%', marginBottom: '10px' }}
                />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            </div>
            </div>
            <div>
                <label>Email Address</label>
                <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
            </div>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Submit
            </button>
        </form>
        </div>
    );
};

export default Formulario;
