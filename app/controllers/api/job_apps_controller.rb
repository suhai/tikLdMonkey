class Api::JobAppsController < ApplicationController
  # before_filter :verify_logged_in

  def index
    @job_apps = JobApp.all
    render json: @job_apps
  end

  def new
    # @page_title = 'Add job_app'
    @job_app = JobApp.new
    render json: @job_app
  end
  
  def create 
    @job_app = JobApp.new(job_app_params)
    if @job_app.save
      flash[:notice] = "#{@job_app.role} Job Application Created"
      redirect_to api_job_apps_path
    else    
      render 'new'
    end
  end

  def show 
    @job_app = JobApp.find(params[:id])
    render json: @job_app
  end

  def edit
    @job_app = JobApp.find(params[:id])
    render json: @job_app
  end

  def update
    @job_app = JobApp.find(params[:id])
    if @job_app.update(job_app_params)
      flash[:notice] = 'Job Apps Updated'
      redirect_to api_job_apps_path
    else    
      render 'new'
    end
  end

  def destroy
    @job_app = JobApp.find(params[:id])
    @job_app.destroy
    flash[:notice] = "#{@job_app.role} Job Application Removed"
    redirect_to api_job_apps_path
  end

  private
  def job_app_params
    params.require(:job_app).permit(:role, :job_url, :company_name, :company_url, :location, :salary_range, :date_applied, :activity)
  end
end
