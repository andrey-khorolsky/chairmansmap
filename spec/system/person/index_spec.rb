require 'rails_helper'

RSpec.describe "people", type: :system do
  let!(:person) { create(:person) }

  it "shows all people" do
    visit person_index_path
    expect(page).to have_content(person.full_name)
      .and have_content(person.tel)
      .and have_content(person.address)
      .and have_content(person.member)
  end
end
