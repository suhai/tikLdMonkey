@trivia.each do |trivium|
  json.set! trivium.id do
		json.id trivium.id
		json.excerpt trivium.excerpt
		json.image_url trivium.image_url
		json.body trivium.body
		json.category_id trivium.category_id
		json.video_url trivium.video_url
		json.image_url trivium.image_url
		json.created_at trivium.created_at
		json.updated_at trivium.updated_at
	end
end