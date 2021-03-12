class AppointmentsController < ApplicationController
  before_action :set_user
  before_action :set_doctor
  def index 
    @appointments = @users.doctor.appointments
     render component: "Appointments", props: { user: @user, doctor: @doctor, appointments: @appointments}
  end

  def new
    @appointment = @users.doctor.appointment.new
    @users = User.all - @doctor.users
    render component: "AppointmentNew", props: { user: @user, doctor: @doctor, appointment: @appointment}
  end
  def create
    @appointment = @users.doctor.appointment.new(appointment_params)
    if @appointment.save
      redirect_to user_doctor_appoinments_path(@doctor)
    else
      @user = User.all - @doctor.users
      render component: "AppointmentNew", props: {  user: @user, doctor: @doctor, appointment: @appointment}
    end

  end

  def destroy
    @appointment = @doctor.appointments.find(params[:id])
    @appointment.destroy
    redirect_to user_doctor_appoinments_path(@doctor)
  end

  private

    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    def appointment_params
      params.require(:appointment).permit(:time)
    end



end
