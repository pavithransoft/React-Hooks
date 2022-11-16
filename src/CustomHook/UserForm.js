import React from 'react';
import useInput from './useInput';

function UserForm() {

    const [firstName, bindFirstName, resetFirsetName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirsetName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type='text' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...bindLastName} type='text' />
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UserForm
