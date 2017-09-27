class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :sender
      t.string :email
      t.string :subject
      t.text :msg

      t.timestamps
    end
  end
end
