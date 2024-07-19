class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :active_from, :active_to

  belongs_to :plot
  belongs_to :person
  has_one :plot_datum, through: :plot
end
