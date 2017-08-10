@job_apps.each do |job_app|
  json.set! job_app.id do
    json.id job_app.id
    json.role job_app.role
    json.job_url job_app.job_url
    json.company_name job_app.company_name
    json.company_url job_app.company_url
    json.location job_app.location
    json.salary_range job_app.salary_range
    json.date_applied job_app.date_applied
    json.activity job_app.activity
  end
end
