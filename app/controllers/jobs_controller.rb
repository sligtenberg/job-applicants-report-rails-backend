class JobsController < ApplicationController
    def index
        @jobs = Job.includes(applicants: :skills)
        @unique_skills_count = Skill.distinct.pluck(:name).count
        #render json: @jobs
        render json: { jobs: ActiveModel::Serializer::CollectionSerializer.new(@jobs, each_serializer: JobSerializer), unique_skills_count: @unique_skills_count }
    end
end
