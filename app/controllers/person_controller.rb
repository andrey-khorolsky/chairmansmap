class PersonController < ApplicationController

  def index
    respond_to do |format|
      format.html { @people = Person.all.order(:surname).includes(:owners) }
      format.json { render json: Person.send(params[:type]).order(:surname) }
    end
  end

  def edit
    @person = Person.find(params[:id])
  end

  def update
    Person.find(params[:id]).update(person_params)
    redirect_to person_index_path
  end


  private

  def person_params
    params.require(:person).permit(:surname, :first_name, :middle_name, :tel, :address)
  end
end
