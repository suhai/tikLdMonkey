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

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, message: 'must be at least 6 characters'}, allow_nil: true

  has_attached_file :profile_image_url,
    default_url: "http://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg",
    s3_protocol: :https
  has_attached_file :header_image_url,
    default_url: "http://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg",
    s3_protocol: :https


  attr_reader :password

  after_initialize :ensure_session_token
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_user_credentials(username, password)
    user = User.find_by(username: username)
    return user if (user && user.password?(password))
    nil
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
