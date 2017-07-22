class CreateJobApps < ActiveRecord::Migration[5.0]
  def change
    create_table :job_apps do |t|
      t.string :role
      t.string :job_url
      t.string :company_name
      t.string :company_url
      t.string :location
      t.string :salary_range
      t.datetime :date_applied
      t.text :activity

      t.timestamps
    end
  end
end
