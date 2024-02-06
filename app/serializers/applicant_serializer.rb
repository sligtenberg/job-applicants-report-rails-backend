class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :website, :cover_letter, :skills

  def skills
    object.skills.map { |skill| { id: skill.id, name: skill.name } }
  end
end
