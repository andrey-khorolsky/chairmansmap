class Person < ApplicationRecord
  include Discard::Model

  has_many :owners
  has_one :owner, -> { where(active_to: nil) }
  has_many :plots, through: :owners

  def full_name
    "#{surname} #{first_name} #{middle_name}"
  end

  def member
    member_from.strftime("%d.%m.%Y")
  end
end
