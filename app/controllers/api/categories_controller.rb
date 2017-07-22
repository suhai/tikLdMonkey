class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render :index
  end

  def new
    # @page_title = 'Add Category'
    @category = Category.new
    render json: @category
  end
  
  def create 
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else    
      render json: @category.errors.full_messages, status: 422
    end
  end

  def show 
    @category = Category.find(params[:id])
    render json: @category
  end

  def edit
    @category = Category.find(params[:id])
    render json: @category
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      flash[:notice] = 'Categories Updated'
      redirect_to api_categories_path
    else    
      render 'new'
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    flash[:notice] = "#{@category.name} Categories Removed"
    redirect_to api_categories_path
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
