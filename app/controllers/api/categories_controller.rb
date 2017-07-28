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

  # def update
  #   @category = Category.find(params[:id])
  #   if @category.update(category_params)
  #     render json: @category
  #     # flash[:notice] = 'Categories Updated'
  #   else    
  #     render json: @category.errors.full_messages, status: 422
  #     # render "can't update field"
  #   end
  # end


  def update
    @category = Category.find_by(id: params[:id])
    if @category.update_attributes(category_params)
      render json: @category
    else    
      render json: @category.errors.full_messages, status: 422
      # render "can't update field"
    end
  end




  def destroy
    @category = Category.find(params[:id])
    @category.destroy! if @category
    render json: @category  
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
