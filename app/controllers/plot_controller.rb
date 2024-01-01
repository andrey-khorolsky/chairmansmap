class PlotController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  NO_MATTER = "не важно"

  # GET /
  def index
    @people = Person.all.order(:surname)
  end

  # GET /plot/1 or /plot/1.json
  def show
    render json: Plot.find(params[:id]), include: ["plot_datum", "owner", "person"]
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

    render json: plot, include: ["plot_datum", "owner", "person"], status: 200
  end

  def filter
    query = {}
    query.merge!({owner_type: which_owner}) if which_owner
    query.merge!({sale_status: which_sale_status}) if which_sale_status

    if which_owner || which_sale_status
      render json: {plots:  PlotDatum.where(query).map { _1.plot.number }}
    else
      render json: {}
    end
  end


  private

    def owner_params
      params.require(:owner).permit(:person_id)
    end

    def plot_data_params
      params.require(:plot_data).permit(:sale_status, :owner_type, :description)
    end

    def which_owner
      (params.require(:owner_type) == NO_MATTER) ? false : params.require(:owner_type)
    end

    def which_sale_status
      (params.require(:sale_status) == NO_MATTER) ? false : params.require(:sale_status)
    end
  
end
