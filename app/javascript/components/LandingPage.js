import React from 'react';

const LandingPage = () => {
  return (
    <>
    <h1> Welcome to our clinic.</h1><br/>
    <h3> Please select one of the options to proceed:</h3><hr/>
    <a href="/doctors"> Doctors</a><br/>
    <a href="/users"> Users</a><br/>
    <a href="/appoinments"> Appointments</a>
    </>
  )
}

export default LandingPage;