class Owner < ApplicationRecord
  belongs_to :plot
  belongs_to :person
  has_one :plot_datum, through: :plot
end
