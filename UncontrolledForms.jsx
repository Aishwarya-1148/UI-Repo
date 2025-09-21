import {useRef} from 'react'

function UncontrolledForms() {
    // step1 
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const departmentRef = useRef();
    const mobileRef = useRef();
    const locationRef = useRef();
    const genderRef = useRef();

    // 2nd step 

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            department: departmentRef.current.value,
            mobile:mobileRef.current.value,
            location:locationRef.current.value,
            

        }
        console.log('User Data:', formData);

    }
    return (
        <div>
            <form className='container' onSubmit={handleSubmit} >
                <h1 className='text-primary'>Un-Controlled Forms</h1>
                <input type="text" name='name' required placeholder='Enter Your Name'
                    ref={nameRef} /> <br /><br />

                <input type="email" name='email' required placeholder='Enter Your Email'
                    ref={emailRef} /> <br /><br />

                <input type="password" name='password' required placeholder='Enter Your Password'
                    ref={passwordRef} /> <br /><br />

                <select name="departmemnt" ref={departmentRef}>
                    <option value="HR">HR</option>
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                </select> <br /> <br />

                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
        </div>
    )
}

export default UncontrolledForms
