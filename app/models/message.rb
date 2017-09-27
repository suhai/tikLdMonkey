class Message < ApplicationRecord
	validates :sender, :email, :msg, :presence => true
end
