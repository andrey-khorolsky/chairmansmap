class PlotDatumSerializer < ActiveModel::Serializer
  attributes :kadastr_number, :sale_status, :description, :owner_type

  belongs_to :plot
end
