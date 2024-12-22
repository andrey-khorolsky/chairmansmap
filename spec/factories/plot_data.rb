FactoryBot.define do
  factory :plot_datum do
    plot { create(:plot) }
    description { FFaker::Lorem.sentence }
    sale_status { "не продается" }
    owner_type { "государственная собственность" }
    kadastr_number { "2862838" }
  end
end
