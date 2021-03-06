# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171008060403) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_apps", force: :cascade do |t|
    t.string   "role"
    t.string   "job_url"
    t.string   "company_name"
    t.string   "company_url"
    t.string   "location"
    t.string   "salary_range"
    t.datetime "date_applied"
    t.text     "activity"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string   "sender"
    t.string   "email"
    t.string   "subject"
    t.text     "msg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.string   "git_url"
    t.string   "web_url"
    t.text     "tool_box"
    t.text     "description"
    t.string   "image_url"
    t.text     "tags"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "trivia", force: :cascade do |t|
    t.string   "title"
    t.text     "excerpt"
    t.text     "body"
    t.string   "image_url"
    t.string   "video_url"
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["category_id"], name: "index_trivia_on_category_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "password_digest",                                                                                           null: false
    t.string   "session_token",                                                                                             null: false
    t.string   "profile_image_url", default: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg"
    t.datetime "created_at",                                                                                                null: false
    t.datetime "updated_at",                                                                                                null: false
    t.string   "header_image_url"
    t.text     "description",       default: ""
    t.boolean  "is_privy"
    t.string   "username"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  add_foreign_key "trivia", "categories"
end
