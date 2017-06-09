require 'sinatra/base'
require 'json'
require 'sinatra/cross_origin'

class Thermostat < Sinatra::base

  before do
    headers "Access-Control-Allow-Origin" => "*"
  end

  get '/temperature' do
    JSON.parse(File.open("userThermostat.json", "r"))
  end

  post '/temperature' do
    File.open("userThermostat.json", "w").to_json
    redirect '/temperature'
  end
end
