class Api::JobAppsController < ApplicationController

  def index
    @job_apps = JobApp.all
    render :index
  end
  
  def create 
    @job_app = JobApp.new(job_app_params)
    if @job_app.save
     render json: @job_app
    else    
     render json: @job_app.errors.full_messages, status: 422
    end
  end


  def update
    @job_app = JobApp.find_by(id: params[:id])
    if @job_app.update_attributes(job_app_params)
      render json: @job_app
    else    
      render json: @job_app.errors.full_messages, status: 422
    end
  end



  def destroy
    @job_app = JobApp.find(params[:id])
    @job_app.destroy! if @job_app
    render json: @job_app
  end

  private
  def job_app_params
    params.require(:job_app).permit(:id, :role, :job_url, :company_name, :company_url, :location, :salary_range, :date_applied, :activity)
  end
end
