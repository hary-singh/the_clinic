import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, id } = doctor
  return (
    <>
      <h1>Doctor: {name}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments`}>Check your appointments</a>
    </>
  )
}

export default Doctor;