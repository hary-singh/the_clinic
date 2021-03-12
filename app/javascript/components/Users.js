import React from 'react';

const Users = ({ users }) => {
  return(
    <>
      <h1>Users</h1>
      <a href={`/users/new`}>New User</a>
      { users.map( (u) => (
        <div>
          <a href={`/users/${u.id}`}>{u.first_name} {u.Last_name}</a>
        </div>
      ))}
    </>
  )
}
export default Users;