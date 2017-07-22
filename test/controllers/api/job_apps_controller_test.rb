require 'test_helper'

class Api::JobAppsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_job_apps_index_url
    assert_response :success
  end

  test "should get new" do
    get api_job_apps_new_url
    assert_response :success
  end

  test "should get create" do
    get api_job_apps_create_url
    assert_response :success
  end

  test "should get show" do
    get api_job_apps_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_job_apps_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_job_apps_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_job_apps_destroy_url
    assert_response :success
  end

end
