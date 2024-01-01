class PlotSerializer < ActiveModel::Serializer
  attributes :id, :number, :area, :perimetr # id means gid

  has_one :plot_datum
  has_one :owner
  has_one :person, through: :owner
end
