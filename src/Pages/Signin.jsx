import React, { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Optional: install lucide-react for icons
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignInEmailPass, SignInwithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()

  const location = useLocation()
  console.log(location);
  const HangleSignIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log([email, password]);
    SignInEmailPass(email,password).then((result)=>{
        const user = result.user;
        navigate(location.state);
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  const HandleSignInwithGoogle = () =>{ 
    SignInwithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });}


  
  return (
    <>
      <Header></Header>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        {/* Main Card Container */}
        <div className="bg-white w-full max-w-md rounded-[2rem] shadow-sm border border-gray-100 p-10 flex flex-col items-center">
          {/* Logo and Header */}
          <div className="mb-8 text-center">
            <span className="text-4xl mb-4 block">🌻</span>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 font-medium">
              Log in to your SkillSwap account
            </p>
          </div>

          {/* Form Fields */}
          <form
            className="w-full space-y-5"
            onSubmit={HangleSignIn}
          >
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm font-semibold text-yellow-500 hover:text-yellow-600"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full py-4 bg-[#E9C46A] hover:bg-[#dfb44e] text-gray-900 font-bold rounded-xl transition-colors mt-2 shadow-sm">
              Login
            </button>
          </form>
          

          {/* Divider */}
          <div className="w-full flex items-center my-8">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
              OR
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Login */}
          <button onClick={HandleSignInwithGoogle} className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition mb-6">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Footer Link */}
          <p className="mt-10 text-gray-500 font-medium">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-yellow-500 font-bold hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signin;
