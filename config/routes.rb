Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :categories, except: [:new, :edit, :show]
    resources :games, except: [:new, :edit, :show]
    resources :job_apps, except: [:new, :edit, :show]
    resources :projects, except: [:new, :edit, :show]
    resources :trivia, except: [:new, :edit, :show]
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
end
