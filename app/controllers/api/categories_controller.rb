class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render :index
  end
  
  def create 
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else    
      render json: @category.errors.full_messages, status: 422
    end
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      flash[:notice] = 'Categories Updated'
    else    
      render "can't update field"
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy! if @category
    flash[:notice] = "#{@category.name} Categories Removed"
    render json: @category  
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
