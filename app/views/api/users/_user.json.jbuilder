json.extract! user, :id, :username, :profile_image_url, :header_image_url, :description
json.id user.id
json.username user.username
json.profile_image_url user.profile_image_url
json.header_image_url user.header_image_url