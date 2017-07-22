class Api::TriviaController < ApplicationController

  def index
    @trivia = Trivium.all
    render json: @trivia
  end

  def new
    # @page_title = 'Add Trivia'
    @trivium = Trivium.new
    render json: @trivium
  end
  
  def create 
    @trivium = Trivium.new(trivium_params)
    if @trivium.save
      flash[:notice] = "#{@trivium.title} Trivia Created"
      redirect_to api_trivia_path
    else    
      render 'new'
    end
  end

  def show 
    @trivium = Trivium.find(params[:id])
    render json: @trivium
  end

  def edit
    @trivium = Trivium.find(params[:id])
    render json: @trivium
  end

  def update
    @trivium = Trivium.find(params[:id])
    if @trivium.update(trivium_params)
      flash[:notice] = 'Trivia Updated'
      redirect_to api_trivia_path
    else    
      render 'new'
    end
  end

  def destroy
    @trivium = Trivium.find(params[:id])
    @trivium.destroy
    flash[:notice] = "#{@trivium.title} Trivia Removed"
    redirect_to api_trivia_path
  end

  private
  def trivium_params
    params.require(:trivium).permit(:title, :excerpt, :body, :image_url, :video_url, :category_id)
  end
end
