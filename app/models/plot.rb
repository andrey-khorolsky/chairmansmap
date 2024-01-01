class Plot < ApplicationRecord
  has_one :plot_datum
  has_many :owners
  has_one :owner, -> { order "created_at DESC" }
  has_one :person, through: :owner
end
