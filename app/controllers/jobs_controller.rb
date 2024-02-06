class JobsController < ApplicationController
    def index
        @jobs = Job.includes(applicants: :skills)
        render json: @jobs
    end
end
