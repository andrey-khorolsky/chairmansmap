class PlotDatum < ApplicationRecord
  belongs_to :plot
  has_one :owner, through: :plot
end
