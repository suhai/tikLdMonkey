export const fetchProject = project => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${project}`
  })
);

export const fetchProjects = query => {
  if (query === undefined) query = {};
  return $.ajax({
    method: 'GET',
    url: `api/projects`,
    data: {
      query: query.query,
      project_id: query.project_id,
      search: query.search
    }
  });
};

export const createProject = project => (
 $.ajax({
    method: 'POST',
    url: '/api/projects',
    dataType: "json",
    data: project
  })
);

export const updateProject = (project, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/projects/${id}`,
    dataType: "json",
    data: project
  })
);

export const deleteProject = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`
  })
);
