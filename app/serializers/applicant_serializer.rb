class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :website, :cover_letter, :formatted_skills

  def formatted_skills
    object.skills.map { |skill| { id: skill.id, name: skill.name } }
  end
end
