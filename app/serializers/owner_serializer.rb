class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :active_from, :active_to

  has_one :person
end
