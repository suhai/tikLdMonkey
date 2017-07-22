# == Schema Information
#
# Table name: games
#
#  id          :integer          not null, primary key
#  name        :string
#  image_url   :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Game < ApplicationRecord
end
