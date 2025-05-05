package com.Main.Utility;

public class Data {
public static String getMessageBody(String otp,String name)
{
	return "<!DOCTYPE html>"
	        + "<html><head><meta charset='UTF-8'>"
	        + "<title>Your OTP Code</title>"
	        + "<style>"
	        + "body {font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;}"
	        + ".container {max-width: 500px; background-color: #fff; padding: 30px; margin: auto;"
	        + "border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);}"
	        + ".otp {font-size: 28px; font-weight: bold; color: #2c3e50; margin: 20px 0;}"
	        + ".footer {margin-top: 30px; font-size: 14px; color: #888;}"
	        + "</style></head>"
	        + "<body><div class='container'>"
	        + "<h2>Hi " + name + ",</h2>"
	        + "<p>Thank you for using our service.</p>"
	        + "<p>Your One-Time Password (OTP) for verification is:</p>"
	        + "<div class='otp'>" + otp + "</div>"
	        + "<p>Please enter this OTP to complete your action. This OTP is valid for 10 minutes.</p>"
	        + "<p>If you did not request this, please ignore this email.</p>"
	        + "<div class='footer'>"
	        + "<p>Thanks,<br>DreamHire</p>"
	        + "</div></div></body></html>";

   }
}
