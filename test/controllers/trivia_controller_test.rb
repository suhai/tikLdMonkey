require 'test_helper'

class TriviaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get trivia_index_url
    assert_response :success
  end

  test "should get new" do
    get trivia_new_url
    assert_response :success
  end

  test "should get create" do
    get trivia_create_url
    assert_response :success
  end

  test "should get show" do
    get trivia_show_url
    assert_response :success
  end

  test "should get edit" do
    get trivia_edit_url
    assert_response :success
  end

  test "should get update" do
    get trivia_update_url
    assert_response :success
  end

  test "should get destroy" do
    get trivia_destroy_url
    assert_response :success
  end

end
