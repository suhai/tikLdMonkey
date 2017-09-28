# class Api::GamesController < ApplicationController
#   def index
#     @games = Game.all
#     render json: @games
#   end

#   def new
#     # @page_title = 'Add Game'
#     @game = Game.new
#     render json: @game
#   end
  
#   def create 
#     @game = Game.new(game_params)
#     if @game.save
#       flash[:notice] = "#{@game.name} Games Created"
#       redirect_to api_games_path
#     else    
#       render 'new'
#     end
#   end

#   def show 
#     @game = Game.find(params[:id])
#     render json: @game
#   end

#   def edit
#     @game = Game.find(params[:id])
#     render json: @game
#   end

#   def update
#     @game = Game.find(params[:id])
#     if @game.update(game_params)
#       flash[:notice] = 'Games Updated'
#       redirect_to api_games_path
#     else    
#       render 'new'
#     end
#   end

#   def destroy
#     @game = Game.find(params[:id])
#     @game.destroy
#     flash[:notice] = "#{@game.name} Games Removed"
#     redirect_to api_games_path
#   end

#   private
#   def game_params
#     params.require(:game).permit(:name, :image_url, :description)
#   end
# end
