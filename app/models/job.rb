class Job < ApplicationRecord
    has_many :applicants
    has_many :skills, through: :applicants
end
