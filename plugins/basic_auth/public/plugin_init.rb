  class ApplicationController < ActionController::Base
    http_basic_authenticate_with(
      name: ENV.fetch("PUI_BASIC_AUTH_USERNAME", "admin"),
      password: ENV.fetch("PUI_BASIC_AUTH_PASSWORD", "password")
    )
  end
end
