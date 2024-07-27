class PlotController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  # GET /
  def index
    @people = Person.all.order(:surname)
  end

  # GET /plot/1 or /plot/1.json
  def show
    render json: PlotSerializer.new.serialize_to_json(Plot.find(params[:id]))
  end

  # PATCH/PUT /plot/1 or /plot/1.json
  def update
    updated = false
    plot = Plot.find_by(number: params.require(:id))

    if owner_params.present?
      plot.owner.update(owner_params)
      updated = true
    end

    if plot_data_params.present?
      plot.plot_datum.update(plot_data_params)
      updated = true
    end

    render json: {}, status: 204 unless updated

    render json: PlotSerializer.new.serialize_to_json(plot), status: 200
  end

  private

  def owner_params
    params.require(:owner).permit(:person_id)
  end

  def plot_data_params
    params.require(:plot_data).permit(:sale_status, :owner_type, :description)
  end
end
