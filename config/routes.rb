Rails.application.routes.draw do
  resources :plot, only: [:index, :show, :update]
  resources :person, only: [:index, :edit, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "/plot/filter", to: "plot#filter"
  
  # Defines the root path route ("/")
  root "plot#index"
end
