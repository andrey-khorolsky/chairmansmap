class Person < ApplicationRecord
  include Discard::Model

  has_many :owners
end
