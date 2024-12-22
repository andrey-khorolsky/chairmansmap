class Plot < ApplicationRecord
  self.primary_key = :number

  has_one :plot_datum, dependent: :destroy
  has_many :owners
  has_one :owner, -> { where(active_to: nil) }
  has_many :persons, through: :owners
  has_one :person, through: :owner

  validates :geom, presence: true
end
