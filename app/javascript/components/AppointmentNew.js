import React from 'react';

const AppointmentNew = ({ doctor, time, user}) => {
  const { doctor, errors, user, time } = enrollment;
  const defaultDoctor = doctor ? doctor : "";
  const defaultUser = user ? user : "";
  const defaultTime = time ? time : "";
  return(
    <>
      <h1>Add Doctor</h1>
      { errors && errors }
      <form action={`/doctor/${doctor.id}/appointments`} method="post">
        <label for="doctor">Choose a Doctor:</label>
        <input 
          name="appointment[doctor]" 
          id="doctor" 
          defaultValue={defaultDoctor}
          type = 'text'
          >
        </input>
        <br />
        <label for="user">What is your name?:</label>
        <input 
          name="appointment[user]" 
          id="user" 
          defaultValue={defaultUser}
          type = "text"
          >
        </input>
        <label for="Time">What time would you like to see the Doctor?</label>
        <input 
          name="appointment[time]" 
          id="user" 
          defaultValue={defaultTime}
          type = "text"
          >
        </input>
      { users.map((u) => (
        <option value={u.id}>
          {`${u.first_name} ${u.last_name}`}
        </option>
          ))}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}


export default AppointmentNew;