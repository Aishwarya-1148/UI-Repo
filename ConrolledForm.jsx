import React, { useState } from 'react';


function ConrolledForm() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        select: 'HR',
        mobileNo: '',
        location: 'Pune',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev, [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration Successfull..!')
    }
    return (
        <div className='w-50 ms-5 p-5'>
            <h1 className='text-primary text-center'> This is the Example of Controlled Form in React </h1>

            <form className='container text-center bg-warning ' onSubmit={handleSubmit} >

                <input className='w-75 mt-3' type="text" name='name' required placeholder='Enter Name'
                    onChange={handleChange} value={form.name} /> <br /><br />

                <input className='w-75 mt-3' type="email" name='email' required placeholder='Enter Email'
                    onChange={handleChange} value={form.email} /> <br /><br />

                <input className='w-75 mt-3' type="password" name='password' required placeholder='Enter Password'
                    onChange={handleChange} value={form.password} /> <br /><br />

                <input className='w-75 mt-3' type='Number' name='mobileNo' required placeholder='Mobile No'
                    onChange={handleChange} value={form.mobileNo} /> <br></br> <br></br>

                <select className='w-75 mt-3' name="location" onChange={handleChange} value={form.location}>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Solapur">Solapur</option>
                </select> <br /> <br />
                <input  type='radio' name='male'
                    onChange={handleChange} value={form.male} />Male

                <input type='radio' name='female'
                    onChange={handleChange} value={form.female} />Female

                <input type='radio' name='other'
                    onChange={handleChange} value={form.other} />Other <br></br><br></br>

                <select className='w-75 mt-3' name="departmemnt" onChange={handleChange} value={form.department}>
                    <option value="HR">HR</option>
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                </select> <br /> <br />

                <button className='btn btn-primary mb-3' type='submit'>Register</button>
            </form>
        </div>
    )
}

export default ConrolledForm;
