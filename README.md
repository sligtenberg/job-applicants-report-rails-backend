# README

# OnWater Code Challenge - Job Applicant Report-backend

job-applicant-report-backend is a Ruby on Rails server that serializes and serves PostgreSQL data in a JSON format.

## Local implementation

Repo: https://github.com/sligtenberg/job-applicants-report-rails-backend  
Node Version: v20.11.0  
Ruby Version: v2.7.4  
Rails: v7.1.3  
Database: PostgreSQL  

To run the development server:  
 - Clone the repo down to your local environment.
 - CD into the project root directory
 - Install dependencies: $ bundle install
 - Create database: $ rails db:create
 - Import the data from the SQL file into the database, replacing your_username: $ psql -h localhost -U your_username -d job_applicants_report_rails_backend_development -f data/data.sql
 - Run migrations: $ rails db:migrate
 - Start the development server: $ rails db:start

If the developement server has started successfully, try navigating in the browser to http://localhost:3000/jobs. You should see some json data.

If you would like to run the client application on this developement server, continue by following the steps in the readme in the client folder.
