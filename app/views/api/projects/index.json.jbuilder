@projects.each do |project|
  json.set! project.id do
		json.id project.id
		json.title project.title
		json.web_url project.web_url
		json.tool_box project.tool_box
		json.description project.description
		json.image_url project.image_url
		json.tags project.tags
		json.created_at project.created_at
		json.updated_at project.updated_at
	end
end