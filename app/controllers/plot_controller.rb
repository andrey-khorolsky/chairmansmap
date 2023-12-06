class PlotController < ApplicationController
  before_action :set_plot, only: %i[ show edit update destroy ]

  # GET /plots
  def index
    # @plots = Plot.all
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

  # GET /plots/new
  # def new
  #   @plot = Plot.new
  # end

  # GET /plots/1/edit
  # def edit
  # end

  # POST /plots or /plots.json
  # def create
  #   @plot = Plot.new(plot_params)

  #   respond_to do |format|
  #     if @plot.save
  #       format.html { redirect_to plot_url(@plot), notice: "Plot was successfully created." }
  #       format.json { render :show, status: :created, location: @plot }
  #     else
  #       format.html { render :new, status: :unprocessable_entity }
  #       format.json { render json: @plot.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # PATCH/PUT /plots/1 or /plots/1.json
  def update
    respond_to do |format|
      if @plot.update(plot_params)
        format.html { redirect_to plot_url(@plot), notice: "Plot was successfully updated." }
        format.json { render :show, status: :ok, location: @plot }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @plot.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /plots/1 or /plots/1.json
  # def destroy
  #   @plot.destroy

  #   respond_to do |format|
  #     format.html { redirect_to plots_url, notice: "Plot was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plot
      @plot = Plot.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plot_params
      params.fetch(:plot, {})
    end
  
end
