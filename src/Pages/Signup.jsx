import React, { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignupEmailPass, SignInwithGoogle, UpdateProfile, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const hangleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photourl = form.photourl.value;
    const password = form.password.value;
    console.log([name, email, photourl, password]);
    SignupEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        UpdateProfile({ displayName: name, photoURL: photourl}).then(()=>{
          setUser({...user, displayName: name, photoURL:photourl})                // যেহেতু আগেই email, pass দিয়ে user create করে ফেলেছি এবং পরে name & photo সংযুক্ত করবো তাই ... 
          navigate("/")
        })
        .catch((error)=>{
          console.log(error)
        })
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const HandleSignInwithGoogle = () => {
    SignInwithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="text-3xl mb-2">🌻</div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Join the SkillSwap community
            </p>
          </div>

          <form onSubmit={hangleSignup} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  name="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Requirements */}
              <ul className="mt-2 space-y-1">
                <li className="text-xs text-gray-500 flex items-center">
                  <span className="mr-2">○</span> One uppercase letter
                </li>
                <li className="text-xs text-gray-500 flex items-center">
                  <span className="mr-2">○</span> One lowercase letter
                </li>
                <li className="text-xs text-gray-500 flex items-center">
                  <span className="mr-2">○</span> At least 6 characters
                </li>
              </ul>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#E9C46A] hover:bg-[#dfb44e] text-gray-800 font-bold py-3 rounded-xl shadow-sm transition mt-4"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <hr className="border-gray-200" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">
              OR
            </span>
          </div>

          {/* Google Button */}
          <button
            onClick={HandleSignInwithGoogle}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition mb-6"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/signin"
              className="text-[#E9C46A] font-bold hover:underline"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;
