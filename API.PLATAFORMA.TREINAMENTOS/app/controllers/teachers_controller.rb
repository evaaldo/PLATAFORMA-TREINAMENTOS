class TeachersController < ApplicationController
  before_action :find_teacher, only: [ :show, :update, :destroy ]

  def index
    @teachers = Teacher.all
    render json: @teachers
  end

  def show
    render json: @teacher
  end

  def create
    @teacher = Teacher.new(set_params)

    if @teacher.save
      render json: @teacher, status: :created
    else
      render json: { errors: @teacher.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @teacher.update(set_params)
      render json: @teacher, status: :ok
    else
      render json: { errors: @teacher.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @teacher.destroy
      render json: { message: "Professor removido com sucesso" }, status: :ok
    else
      render json: { errors: "Erro ao remover o professor" }, status: :unprocessable_entity
    end
  end

  private

  def find_teacher
    @teacher =Teacher.find(params[:id])
  end

  def set_params
    params.require(:teacher).permit(:name, :role, :avatar)
  end
end
