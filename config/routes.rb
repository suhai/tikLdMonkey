Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :categories, except: [:new, :edit, :show]
    resources :job_apps, except: [:new, :edit, :show]
    resources :users, except: [:new, :edit]
		resource :session, only: [:create, :destroy]
		resources :messages, except: [:new, :update]
	end
	
	root to: "static_pages#root"
end
