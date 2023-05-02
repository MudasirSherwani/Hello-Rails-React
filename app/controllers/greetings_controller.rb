class GreetingsController < ApplicationController
    def index
        @message = Greeting.order("RANDOM()").first
      end
      
      def api_greeting
        @message = Greeting.order("RANDOM()").first
        render json: { message: @message.message }
      end
end
