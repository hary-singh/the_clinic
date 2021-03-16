import React from "react";

const Appointments = ({ appointments, doctor }) => {
    const { name, id } = doctor;
    return (
      <>
        <h1>Schedule an appointment for {name}</h1>
        <a href={`/doctors/${id}/appointments/new`}>Add Appointment</a>
        {appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <h3>{appointment.name}</h3>
            <a href={`/doctors/${doctor.id}/appointments/${appointment.id}`}> view appointment  </a><br/> 
            <a href={`/departments/${department.id}/appointmentss/${appointment.id}`} data-method="delete"><br/>
               Delete Appointment
            </a>
          </div>
        ))}
        <hr/>
        <a href={`/doctors/${id}`}>Go Back</a>
        <br />
        <a href={`/doctors`}>Back To Doctors</a>
      </>
    );
}

export default Appointments;