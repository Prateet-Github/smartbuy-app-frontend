import { useState } from "react";
import Eye from "../components/Eye.jsx";

const AuthPage = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [resetPasswordState, setResetPasswordState] = useState(false);

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  const toggleForm = () => {
    setCurrentState(currentState === "Sign Up" ? "Log In" : "Sign Up");
    setResetPasswordState(false); // reset if user toggles
  };

  const toggleResetPassword = () => {
    setResetPasswordState(!resetPasswordState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resetPasswordState) {
      alert("Password reset link sent to your email!");
    } else {
      alert(`${currentState} form submitted!`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100" onMouseMove={handleMouseMove}>
      {/* LEFT SIDE: Characters */}
      <div className="w-3/5 flex items-center justify-center bg-gray-200">
        <div className="relative w-80 h-80">
          {/* Orange character */}
          <div className="absolute bottom-0 w-60 z-50 h-32 bg-orange-400 rounded-t-full flex items-center justify-center">
            <div className="absolute flex gap-4">
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
            </div>
          </div>

          {/* Purple rectangle */}
          <div className="absolute bottom-0 left-24 w-24 h-64 z-20 bg-purple-600 flex items-center justify-center">
            <div className="absolute flex gap-6 top-6">
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
            </div>
          </div>

          {/* Black one */}
          <div className="absolute bottom-0 left-44 w-28 h-44 z-30 bg-black pt-10 flex items-center justify-center">
            <div className="absolute flex gap-5 top-6">
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
            </div>
          </div>

          {/* Yellow rectangle */}
          <div className="absolute bottom-0 left-64 z-40 w-28 h-32 bg-yellow-400 rounded-t-full pt-10 flex items-center justify-center">
            <div className="absolute flex gap-5 top-6">
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
              <Eye cursor={cursor} isTypingPassword={isTypingPassword} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login / Sign Up / Reset Password */}
      <div className="w-2/5 flex flex-col gap-10 items-center justify-center bg-white text-center">
        {/* Black star icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="w-10 h-10"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.508 8.279L12 18.896l-7.444 4.517L6.064 15.13 0 9.306l8.332-1.151z" />
        </svg>

        <form className="w-80 flex flex-col" onSubmit={handleSubmit}>
          {/* RESET PASSWORD FORM */}
          {resetPasswordState ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Reset Password
              </h2>
              <p className="font-extralight text-xs mb-8">
                Enter your email to receive a reset link
              </p>
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 mt-10"
                required
              />
              <button
                type="submit"
                className="bg-black text-white py-2 rounded-full hover:bg-gray-800 mt-8"
              >
                Send Reset Link
              </button>
              <button
                type="button"
                onClick={toggleResetPassword}
                className="text-blue-600 text-sm hover:underline mt-6"
              >
                Back to {currentState}
              </button>
            </>
          ) : (
            <>
              {/* SIGN UP FORM */}
              {currentState === "Sign Up" ? (
                <>
                  <h2 className="text-2xl font-semibold text-center mb-2">
                    Hi there!
                  </h2>
                  <p className="font-extralight text-xs">
                    Please enter your details
                  </p>
                  <input
                    type="text"
                    placeholder="Username"
                    className="mt-10 border-b-2"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-10 border-b-2"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onFocus={() => setIsTypingPassword(true)}
                    onBlur={() => setIsTypingPassword(false)}
                    className="border-b-2 mt-10"
                    required
                  />
                </>
              ) : (
                /* LOGIN FORM */
                <>
                  <h2 className="text-2xl font-semibold text-center mb-2">
                    Welcome back!
                  </h2>
                  <p className="font-extralight text-xs">
                    Please enter your details
                  </p>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-10 border-b-2"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onFocus={() => setIsTypingPassword(true)}
                    onBlur={() => setIsTypingPassword(false)}
                    className="border-b-2 mt-10"
                    required
                  />

                  <button
                    type="button"
                    onClick={toggleResetPassword}
                    className="text-blue-600 text-sm hover:underline mt-4"
                  >
                    Forgot password?
                  </button>
                </>
              )}

              {/* COMMON BUTTONS */}
              <button
                type="submit"
                className="bg-black text-white py-2 rounded-full hover:bg-gray-800 mt-6"
              >
                {currentState}
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2 rounded-full bg-gray-200 mt-4"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <button
                type="button"
                onClick={toggleForm}
                className="text-blue-600 text-sm hover:underline mt-4"
              >
                {currentState === "Sign Up"
                  ? "Already have an account? Log In"
                  : "Need an account? Sign Up"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
