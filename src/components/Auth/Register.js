import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            // You might want to handle this more gracefully in a real app
        } else {
            // Implement your logic for registering the user here
            console.log('Register submit', formData);
        }
    };

    return (
    //     <div className="form-container">
    //     <h2>Register</h2>
    //     <form onSubmit={e => onSubmit(e)}>
    //         <div className="form-group">
    //             <label>Username</label>
    //             <input type="text" name="username" value={username} onChange={e => onChange(e)} required />
    //         </div>
    //         {/* ... [rest of your form fields] */}
    //         <button type="submit">Register</button>
    //     </form>
    // </div>
        <div className="form-container">
            Hello..?
            <h2>Register</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={e => onChange(e)} 
                        minLength="6"
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={e => onChange(e)} 
                        minLength="6"
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
