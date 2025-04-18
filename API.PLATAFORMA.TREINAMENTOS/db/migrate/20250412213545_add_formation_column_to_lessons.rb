class AddFormationColumnToLessons < ActiveRecord::Migration[8.0]
  def change
    add_column :lessons, :formation, :string
  end
end
