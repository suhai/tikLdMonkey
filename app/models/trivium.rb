# == Schema Information
#
# Table name: trivia
#
#  id          :integer          not null, primary key
#  title       :string
#  excerpt     :text
#  body        :text
#  image_url   :string
#  video_url   :string
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Trivium < ApplicationRecord
  belongs_to :category
end
