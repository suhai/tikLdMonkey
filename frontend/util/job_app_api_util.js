export const fetchJobApp = job_app => (
  $.ajax({
    method: 'GET',
    url: `api/job_apps/${job_app}`
  })
);

export const fetchJobApps = query => {
  if (query === undefined) query = {};
  return $.ajax({
    method: 'GET',
    url: `api/job_apps`,
    data: {
      query: query.query,
      job_app_id: query.job_app_id,
      search: query.search
    }
  });
};

export const createJobApp = job_app => (
 $.ajax({
    method: 'POST',
    url: '/api/job_apps',
    dataType: "json",
    data: job_app
  })
);

export const updateJobApp = job_app => (
  $.ajax({
    method: 'PATCH',
    url: `api/job_apps/${job_app.id}`,
    data: {job_app}
  })
);

export const deleteJobApp = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/job_apps/${id}`
  })
);
