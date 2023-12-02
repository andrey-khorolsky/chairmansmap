class CreatePlots < ActiveRecord::Migration[7.0]
  def up
    exec "rails db < db/plots.sql"
  end

  def down
    drop_table :plots, if_exists: true
  end
end
