import React from 'react';
const Appointments = ({ user, doctor,}) =>{

    const displayUser = (id) => {
        let fullName
        users.map ((u) => {
            if (u.id === id){
                fullName = u.first_name + "" + u.last_name
            }
        })
        return fullName
    }

    return(
        <>
        <h1>{doctor.name} Appointments</h1>
        <a href={'/doctors/${doctor.id/appointments/new'}>Add Appointment</a>
        <br />
        <h2> Doctors </h2>
        { doctors.map( (t) => (
            <div>
                <p>{displayUser(t.user_id)}</p>
                <a href={' /doctors/${doctors.id}/appointments/${t.id}'} data-method="delete">
                    Delete
                </a>
            </div>
        ))}
        
        
        <h1>{user.name} Appointments</h1>
        <a href={'/users/${user.id/appointments/new'}>Add Appointment</a>
        <br />
        <h2> Users </h2>
        { Users.map( (t) => (
            <div>
                <p>{displayUser(t.user_id)}</p>
                <a href={' /Users/${Users.id}/appointments/${t.id}'} data-method="delete">
                    Delete
                </a>
            </div>
        ))}
        </>
    )
}
export default Appointments;