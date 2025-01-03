class Owner < ApplicationRecord
  belongs_to :plot
  belongs_to :person
  has_one :plot_datum, through: :plot

  validates :plot_id, :person_id, presence: true
  validates :active_to, uniqueness: {scope: :plot_id}, if: proc { active_to.nil? }
end
