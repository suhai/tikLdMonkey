class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :git_url
      t.string :web_url
      t.text :tool_box
      t.text :description
      t.string :image_url
      t.text :tags

      t.timestamps
    end
  end
end
