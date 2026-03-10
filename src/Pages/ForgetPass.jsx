import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPass = () => {
  const { PasswordReset } = useContext(AuthContext);
  const handleForgetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    PasswordReset(email)
      .then(() => {
        toast.success("Reset email sent. Please check your email");
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-yellow-50 p-5 flex items-center flex-col justify-center rounded-2xl w-[400px]"
        onSubmit={handleForgetPass}
      >
        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-xl text-center font-bold text-gray-800 ml-1">
            Forget Password?
            <br></br>
            <span className="text-sm font-light">
              Enter your valid email. You will get an email. From here you can
              Reset your password
            </span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>
        <button
          type="submit"
          className="w-fit p-4 mt-4 bg-[#E9C46A] hover:bg-[#dfb44e] text-gray-900 font-bold rounded-xl transition-colors mt-2 shadow-sm"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
