import React from 'react';

const AppointmentNew = ({ doctor, appointment, user_id , time}) => {
  const { doctor, errors, user_id, time } = appointment;
  const defaultDoctor = doctor ? doctor : "";
  const defaultUser = user_id ? user_id : "";
  const defaultTime = time ? time : "";
  return(
    <>
      <h1>Add Appointments</h1>
      { errors && errors }
      <form action={`/doctors/${docotr.id}/appointments`} method="post">
        <label for="doctor">Who is your Doctor:</label>
        <select 
          name="appointment[doctor]" 
          id="doctor" 
          defaultValue={defaultDoctor}
        >
        </select>
        <br />
        <label for="user_id">Whats Your Name:</label>
        <select 
          name="appointment[user_id]" 
          id="user_id" 
          defaultValue={defaultUser}
        >
         { users.map((u) => (
           <option value={u.id}>
             {`${u.first_name} ${u.last_name}`}
           </option>
         ))}
        </select>
        <label for="time">What time would you like to see the Doctor:</label>
        <select 
          name="appointment[time]" 
          id="time" 
          defaultValue={defaultTime}
        >
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AppointmentNew;