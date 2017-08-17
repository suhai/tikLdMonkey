class AddUserHeaderImage < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :header_image_url, :string
    change_column :users, :profile_image_url, :string, default: 'https://res.cloudinary.com/swy/image/upload/v1499750288/images/mavis-6-1580.jpg'
  end
end
