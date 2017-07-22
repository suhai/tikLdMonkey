json.extract! user, :id, :username, :profile_image_url, :header_image_url, :description
json.profile_image_url user.profile_image_url.url
json.header_image_url user.header_image_url.url
