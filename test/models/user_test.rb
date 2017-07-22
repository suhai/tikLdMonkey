# == Schema Information
#
# Table name: users
#
#  id                             :integer          not null, primary key
#  username                       :string           not null
#  password_digest                :string           not null
#  session_token                  :string           not null
#  created_at                     :datetime         not null
#  updated_at                     :datetime         not null
#  description                    :text             default("")
#  header_image_url_file_name     :string
#  header_image_url_content_type  :string
#  header_image_url_file_size     :integer
#  header_image_url_updated_at    :datetime
#  profile_image_url_file_name    :string
#  profile_image_url_content_type :string
#  profile_image_url_file_size    :integer
#  profile_image_url_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
