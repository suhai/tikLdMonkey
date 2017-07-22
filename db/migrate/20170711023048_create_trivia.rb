class CreateTrivia < ActiveRecord::Migration[5.0]
  def change
    create_table :trivia do |t|
      t.string :title
      t.text :excerpt
      t.text :body
      t.string :image_url
      t.string :video_url
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
