# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string
#  git_url     :string
#  web_url     :string
#  tool_box    :text
#  description :text
#  image_url   :string
#  tags        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
end
