class AppController < ApplicationController
  layout "app"

  def index
    @scheduler_props = { currentUserId: current_user.id.to_s }
  end
end
