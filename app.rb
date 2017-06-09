require 'sinatra'
require 'json'
#
class Thermostat < Sinatra::Base
set :public_folder, proc { File.join(root) }

  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  get '/temperature' do
    File.open('userThermostat.json', 'r') do |data|
      p data
    end
  end

  post '/temperature' do
    File.open('userThermostat.json', 'w') do |data|
      data.write params[:temperature].to_json
    # {temperature = [params :temperature]}.to_json
  end
end

end
