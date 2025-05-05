import axios from "axios";
import axiosInstance from "../Interceptor/AxiosInterceptor";

const base_url = "http://localhost:8080/users/";

// Register a new user
const registerUser = async (user: any) => {
  return await axiosInstance
    .post(`/users/register`, user)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

// Login a user
const loginUser = async (login: any) => {
  return await axiosInstance
    .post(`/users/login`, login)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

// Send OTP to email
const sendOtp = async (email: string) => {
  return await axiosInstance
    .post(`/users/sendOtp/${email}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

// Verify OTP
const verifyOtp = async (email: string, otp: string) => {
  return await axiosInstance
    .get(`/users/verifyOtp/${email}/${otp}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

// Change password
const changePass = async (email: string, password: string) => {
  return await axiosInstance
    .post(`/users/changedPass`, { email, password })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};

export { registerUser, loginUser, sendOtp, verifyOtp, changePass };
