Rails.application.routes.draw do

  get "/plot/filter", to: "plot#filter"
  
  resources :plot, only: [:show, :update]
  resources :person, only: [:index, :edit, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "plot#index"
end
