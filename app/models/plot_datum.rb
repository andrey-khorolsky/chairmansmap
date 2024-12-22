class PlotDatum < ApplicationRecord
  belongs_to :plot

  validates :plot_id, presence: true
end
