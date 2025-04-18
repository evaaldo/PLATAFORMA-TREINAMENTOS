class LessonsController < ApplicationController
  before_action :find_lesson, only: [ :update, :destroy ]

  def index
    @lessons = Lesson.order(:title)
    render json: @lessons.to_json(include: :teacher)
  end

  def show
    @lesson = Lesson.find_by(videoId: params[:id])
    render json: @lesson.to_json(include: :teacher)
  end

  def create
    @lesson = Lesson.new(set_params)

    if @lesson.save
      render json: @lesson, status: :ok
    else
      render json: { errors: @lesson.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @lesson.update(set_params)
      render json: @lesson, status: :ok
    else
      render json: { errors: @lesson.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @lesson.destroy
      render json: { message: "Aula removida com sucesso" }, status: :ok
    else
      render json: { errors: "Erro ao remover a aula" }, status: :unprocessable_entity
    end
  end

  private

  def find_lesson
    @lesson = Lesson.find(params[:id])
  end

  def set_params
    params.require(:lesson).permit(:videoId, :formation, :title, :description, :date, :isAvailable, :isLive, :teacher_id)
  end
end
