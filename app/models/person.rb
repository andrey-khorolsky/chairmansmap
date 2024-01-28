class Person < ApplicationRecord
  include Discard::Model

  has_many :owners

  def full_name
    "#{surname} #{first_name} #{middle_name}"
  end

  def member
    member_from.strftime("%d.%m.%Y")
  end
end
