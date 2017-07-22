# == Schema Information
#
# Table name: job_apps
#
#  id           :integer          not null, primary key
#  role         :string
#  job_url      :string
#  company_name :string
#  company_url  :string
#  location     :string
#  salary_range :string
#  date_applied :datetime
#  activity     :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class JobApp < ApplicationRecord
end
