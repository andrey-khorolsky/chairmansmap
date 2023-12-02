FactoryBot.define do
  factory :person do
    name = FFaker::NameRU.name.split
    first_name { name.first }
    middle_name { name.last }
    surname { FFaker::NameRU.last_name }
    tel { "MyString" }
    address { FFaker::AddressRU.street_address }
    birth { FFaker::Date.birthday }
    member_from { FFaker::Date.backward }
  end
end
