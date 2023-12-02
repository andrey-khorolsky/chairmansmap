class Plot < ApplicationRecord
  has_one :plot_datum
  has_one :owner
end
