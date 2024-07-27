class ApplicationController < ActionController::Base
  rescue_from NoMethodError, with: :not_implemented

  private

  def not_implemented
    render json: {
             message: "the method not implemented"
           },
      status: 501
  end
end
