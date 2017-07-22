Rails.application.routes.draw do
  # namespace :api do
  #   get 'categories/index'
  # end

  # namespace :api do
  #   get 'categories/new'
  # end

  # namespace :api do
  #   get 'categories/create'
  # end

  # namespace :api do
  #   get 'categories/show'
  # end

  # namespace :api do
  #   get 'categories/edit'
  # end

  # namespace :api do
  #   get 'categories/update'
  # end

  # namespace :api do
  #   get 'categories/destroy'
  # end

  # namespace :api do
  #   get 'trivia/index'
  # end

  # namespace :api do
  #   get 'trivia/new'
  # end

  # namespace :api do
  #   get 'trivia/create'
  # end

  # namespace :api do
  #   get 'trivia/show'
  # end

  # namespace :api do
  #   get 'trivia/edit'
  # end

  # namespace :api do
  #   get 'trivia/update'
  # end

  # namespace :api do
  #   get 'trivia/destroy'
  # end

  # namespace :api do
  #   get 'games/index'
  # end

  # namespace :api do
  #   get 'games/new'
  # end

  # namespace :api do
  #   get 'games/create'
  # end

  # namespace :api do
  #   get 'games/show'
  # end

  # namespace :api do
  #   get 'games/edit'
  # end

  # namespace :api do
  #   get 'games/update'
  # end

  # namespace :api do
  #   get 'games/destroy'
  # end

  # namespace :api do
  #   get 'job_apps/index'
  # end

  # namespace :api do
  #   get 'job_apps/new'
  # end

  # namespace :api do
  #   get 'job_apps/create'
  # end

  # namespace :api do
  #   get 'job_apps/show'
  # end

  # namespace :api do
  #   get 'job_apps/edit'
  # end

  # namespace :api do
  #   get 'job_apps/update'
  # end

  # namespace :api do
  #   get 'job_apps/destroy'
  # end

  # namespace :api do
  #   get 'projects/index'
  # end

  # namespace :api do
  #   get 'projects/new'
  # end

  # namespace :api do
  #   get 'projects/create'
  # end

  # namespace :api do
  #   get 'projects/show'
  # end

  # namespace :api do
  #   get 'projects/edit'
  # end

  # namespace :api do
  #   get 'projects/update'
  # end

  # namespace :api do
  #   get 'projects/destroy'
  # end

  # get 'job_apps/index'

  # get 'job_apps/new'

  # get 'job_apps/create'

  # get 'job_apps/show'

  # get 'job_apps/edit'

  # get 'job_apps/update'

  # get 'job_apps/destroy'

  # get 'games/index'

  # get 'games/new'

  # get 'games/create'

  # get 'games/show'

  # get 'games/edit'

  # get 'games/update'

  # get 'games/destroy'

  # get 'trivia/index'

  # get 'trivia/new'

  # get 'trivia/create'

  # get 'trivia/show'

  # get 'trivia/edit'

  # get 'trivia/update'

  # get 'trivia/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :categories
    resources :games
    resources :job_apps
    resources :projects
    resources :trivia
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
end
