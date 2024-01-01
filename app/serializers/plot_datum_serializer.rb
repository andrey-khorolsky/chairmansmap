class PlotDatumSerializer < ActiveModel::Serializer
  attributes :kadastr_number, :sale_status, :description, :owner_type

  has_one :owner, through: :plot
end
