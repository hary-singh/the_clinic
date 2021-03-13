import React from "react";
const User = ({ user }) => {
  const { id, first_name, Last_name } = user
  return (
    <>
      <h1>Name: {Last_name}, {first_name}</h1>
      <hr />
        <a href={`/users/${id}/appointments`}>View Appointments</a>
        <br />
        <a href={`/users/${id}/edit`}>Edit User</a>
        <br />
        <a href={`/users/${id}`} data-method="delete">Delete User</a>
        <br />
        <a href={'/users'}> Back </a>
     
    </>
  )
}
export default User;