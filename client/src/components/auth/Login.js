import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [formData, setFormData] = useState({

        email: '',
        password: '',

    })

    const { email, password } = formData


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })


    }

    const handleSubmit = async (e) => {
        e.preventDefault()


    }

    return (

        <React.Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => handleSubmit(e)}>

                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => handleChange(e)} required />

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password} onChange={e => handleChange(e)}
                        required
                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/rejister">Sign Up</Link>
            </p>


        </React.Fragment>

    )
}

export default Login
