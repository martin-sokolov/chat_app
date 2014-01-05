source :rubygems

gem "rails", "3.1.0"

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem "sass-rails", "  ~> 3.1.0"
  gem "coffee-rails", "~> 3.1.0"
  gem "uglifier", ">= 1.0.3"
end

gem "pg"
gem "jquery-rails"
gem "sass"
gem "RedCloth", :require => "redcloth"
gem "high_voltage"
gem "paperclip"
gem "formtastic"
gem "flutie"
gem "bourbon"
gem "airbrake"
gem "dynamic_form"
gem "rails-backbone"
gem "ejs"

gem "rake", "0.9.2"

gem "jasminerice"

# RSpec needs to be in :development group to expose generators
# and rake tasks without having to type RAILS_ENV=test.
group :development, :test do
  gem "rspec-rails", "~> 2.6.1"
  gem "ruby-debug",   :platforms => :mri_18
  gem 'spork', '~> 0.9.0.rc'
  gem "guard-spork"
end

group :test do
  gem "cucumber-rails", "1.0.2"
  gem "factory_girl_rails"
  gem "bourne"
  gem "database_cleaner"
  gem "fakeweb"
  gem "sham_rack"
  gem "timecop"
  gem "treetop"
  gem "shoulda-matchers"
  gem "launchy"
  gem "capybara-webkit"
  gem "thin"
end

# For heroku cedar
group :staging, :production do
  gem "thin"
end
