import React from 'react';
import Appointments from './Appointments';

const AppointmentNew = ({doctor, user}) => {
    const { time } = Appointments
    const defaultTime = time ? time : "";
    const defaultDoctor = doctor_id ? doctor_id : "";
    return(
        <>
            <h1> Add Appoinments </h1>
            { errors && errors }
            <form action={'/doctors/${doctor.id}/ appointments'} method="post">
                <label for="role">Choose a Doctor</label>
                <select
                    time='appointment[time]'
                    id= 'doctor_id'
                    name= 'user'
                    defaultValue={defaultDoctor}
                >
                    <option value="doctors">Doctors</option>

                </select>
                <br />
                <label for="time"> Choose Your Time</label>
                <select
                    time="appointment[time]"
                    id= "user_id"
                    defaultValue={defaultUser}
                >
                    {users.map((u)=> (
                        <option value = {u.id}>
                            {'${u.first_name} ${u.last_name}'}
                        </option>

                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default AppointmentNew