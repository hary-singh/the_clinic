import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, id } = doctor
  return (
    <>
      <h1>Doctor: {name}</h1>
      <a href={`/doctors/${id}/edit`}>Edit your Info</a>
      <hr />
      <a href={`/doctors/${id}/appointments`}>Check your appointments</a><br/>
      <a href={`/doctors`}>Go Back</a>
    </>
  )
}

export default Doctor;