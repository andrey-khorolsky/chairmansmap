class PlotController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  # GET /plots
  def index
    # @plots = Plot.all
    @people = Person.all.order(:surname)
  end

  # GET /plots/all or /plots/all.json
  def all
    @plots = Plot.all
  end

  # GET /plots/1 or /plots/1.json
  def show
    gid = params[:id]
    plot = Plot.find(gid)
    owner = plot.owner
    person = owner.person
    plot_data = plot.plot_datum
    render json: {
      plot:{
        number: plot.number,
        number_kadastr: plot_data.kadastr_number,
        area: plot.area,
        perimetr: plot.perimetr,
        sale_status: plot_data.sale_status,
        description: plot_data.description
      },
      owner: {
        type: plot_data.owner_type,
        first_name: person.first_name,
        middle_name: person.middle_name,
        surname: person.surname,
        tel: person.tel,
        adr: person.address,
        active_from: owner.active_from,
        active_to: owner.active_to
      }
    }
  end

  # PATCH/PUT /plots/1 or /plots/1.json
  def update
    updated = false
    plot = Plot.find_by(number: params.require(:id))
    owner = plot.owner
    plot_data = plot.plot_datum
    
    if owner_params.present?
      owner.update(owner_params)
      updated = true
    end

    if plot_data_params.present?
      plot_data.update(plot_data_params)
      updated = true
    end
    
    render json: {}, status: 204 unless updated

    person = owner.person

    render json: {
      plot:{
        sale_status: plot_data.sale_status,
        description: plot_data.description
      },
      owner: {
        type: plot_data.owner_type,
        first_name: person.first_name,
        middle_name: person.middle_name,
        surname: person.surname,
        tel: person.tel,
        adr: person.address,
        active_from: owner.active_from,
        active_to: owner.active_to
      }}, status: 200
  end


  private

    def owner_params
      params.require(:owner).permit(:person_id)
    end

    def plot_data_params
      params.require(:plot_data).permit(:sale_status, :owner_type, :description)
    end
  
end
