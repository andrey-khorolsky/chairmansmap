class PersonSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :surname, :tel, :address
  
  belongs_to :owner
end
