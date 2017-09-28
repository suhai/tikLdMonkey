class Api::ProjectsController < ApplicationController
  # before_filter :verify_logged_in

  def index
    @projects = Project.all
    render json: @projects
  end

  def new
    @project = Project.new
    render json: @project
  end
  
  def create 
    @project = Project.new(project_params)
    if @project.save
      render :show
    else    
      render 'new'
    end
  end

  def show 
    @project = Project.find(params[:id])
    render :show
  end

  def edit
    @project = Project.find(params[:id])
    render json: @project
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      flash[:notice] = 'Projects Updated'
      redirect_to api_projects_path
    else    
      render 'new'
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    flash[:notice] = "#{@project.title} Project Removed"
    redirect_to api_projects_path
  end

  private
  def project_params
    params.require(:project).permit(:title, :git_url, :web_url, :tool_box, :description, :image_url, :tags)
  end
end
