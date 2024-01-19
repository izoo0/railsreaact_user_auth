class RegistrationController < ApplicationController
     def def new
          @user = User.new
     end

     def create
          @user = User.new(user_params)
          if @user.save
               login @user
          else
               render :new, status: :failed_to_add_us:error
          end
     end

     def user_params
          params.require(:user).permit(:email, :password, :password_confrimation)
     end

end
