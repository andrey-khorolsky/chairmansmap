class Owner < ApplicationRecord
  belongs_to :plot
  belongs_to :person
end
