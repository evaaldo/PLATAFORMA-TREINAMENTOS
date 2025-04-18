Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  root "lessons#index"
  resources :teachers
  resources :lessons
  resources :users
end
