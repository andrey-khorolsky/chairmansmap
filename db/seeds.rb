# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Plot.all.each do |plot|
  person = FactoryBot.create(:person)
  owner = Owner.create(plot_id: plot.gid, person_id: person.id, active_from: person.member_from)
end

Plot.all.each do |plot|
  PlotDatum.create(plot_id: plot.gid, sale_status: "не продается", owner_type: "личное владение", kadastr_number: (plot.gid*574)+(plot.area*2.7)-(plot.perimetr))
end
