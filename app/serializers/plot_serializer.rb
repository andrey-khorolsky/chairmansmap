class PlotSerializer < ActiveModel::Serializer
  attributes :number, :area, :perimetr

  has_one :plot_datum, dependent: :destroy
  has_many :owners
  has_one :owner, -> { where(active_to: nil) }
  has_many :persons, through: :owners
  has_one :person, through: :owner
end
