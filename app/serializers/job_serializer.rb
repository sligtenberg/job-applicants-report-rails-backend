class JobSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :applicants
end
