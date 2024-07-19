class Owner < ApplicationRecord
  belongs_to :plot
  belongs_to :person
  has_one :plot_datum, through: :plot

  validates :active_to, uniqueness: { scope: :plot_id }, if: proc { actived_to.nil? }
end
