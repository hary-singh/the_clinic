class AppointmentsController < ApplicationController
  # before_action :set_user
  before_action :set_doctor
  def index 
    @appointments = @doctor.appointments
     render component: "Appointments", props: { doctor: @doctor, appointments: @appointments}
  end

  def new
    @appointment = @doctor.appointments.new
    @users = User.all - @doctor.users
    render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment}
  end
  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appoinments_path(@doctor)
    else
      render :new
    end

  end

  def destroy
    @appointment = @doctor.appointments.find(params[:id])
    @appointment.destroy
    redirect_to doctor_appoinments_path(@doctor)
  end

  private

    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    # def set_user
    #   @user = User.find(params[:user_id])
    # end

    def appointment_params
      params.require(:appointment).permit(:time)
    end
end
