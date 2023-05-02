Rails.application.routes.draw do
  root 'root#index'
  resources :greetings, only: [:index]
  get '/api/greeting', to: 'greetings#api_greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
