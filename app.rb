require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/public'
set :port, 8000

get '/home.html' do
  send_file 'home.html'
end
