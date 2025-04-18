class CreateLessons < ActiveRecord::Migration[8.0]
  def change
    create_table :lessons do |t|
      t.string :videoId, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :date, null: false
      t.boolean :isAvailable, null: false
      t.boolean :isLive, null: false
      t.references :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
