class CreateApplicants < ActiveRecord::Migration[7.1]
  def change
    create_table :applicants do |t|
      t.string :name
      t.string :email
      t.string :website
      t.text :cover_letter
      t.references :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
