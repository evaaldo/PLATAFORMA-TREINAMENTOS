class CreateTeachers < ActiveRecord::Migration[8.0]
  def change
    create_table :teachers do |t|
      t.string :name, null: false
      t.string :role, null: false
      t.string :avatar, null: false

      t.timestamps
    end
  end
end
