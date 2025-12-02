class HealthController < ApplicationController
  def index
    render json: { status: '200 Status: Healthy' }
  end
end
