class PlotSerializer < ActiveModel::Serializer
  attributes :number, :area, :perimetr

  has_one :plot_datum
  has_one :owner
  has_one :person, through: :owner
end
