class UsersController < ApplicationController
  before_action :set_params, only: [ :show, :update, :destroy ]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = user.new(params.require(:user).permit(:name, :role, :avatar))

    if @user.save
      render json: @user, status: :ok
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(params.require(:user).permit(:name, :role, :avatar))
      render json: @user, status: :ok
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @user.destroy
      render json: { message: "Usuário removido com sucesso" }, status: :ok
    else
      render json: { message: "Erro ao remover o usuário" }, status: :unprocessable_entity
    end
  end

  private

  def set_params
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :role, :avatar)
  end
end
