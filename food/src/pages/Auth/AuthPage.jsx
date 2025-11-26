import React, { useState } from "react";
import "./AuthPage.css";

// আইকন ইমপোর্ট (অপশনাল, যদি না থাকে তবে টেক্সট দেখাবে)
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const AuthPage = () => {
  // এই স্টেট ঠিক করবে কোন ফর্মটি দেখানো হবে (Login নাকি Register)
  const [isSignUp, setIsSignUp] = useState(false);

  // রেজিস্ট্রেশন ফর্মের ডেটা
  const [regName, setRegName] = useState("");
  const [regId, setRegId] = useState("");
  const [regPass, setRegPass] = useState("");

  // রেজিস্ট্রেশন সাবমিট হ্যান্ডলার
  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registration Successful for ID: ${regId}`);
    
    // রেজিস্ট্রেশন শেষ হলে অটোমেটিক আবার লগইন পেজে (ডিফল্ট) ফিরে যাবে
    setIsSignUp(false); 
    
    // ফর্ম ক্লিয়ার করা
    setRegName("");
    setRegId("");
    setRegPass("");
  };

  return (
    <div className="auth-body">
      {/* মেইন কন্টেইনার - isSignUp ট্রু হলে 'right-panel-active' ক্লাস যোগ হবে */}
      <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
        
        {/* --- Registration Form (Left Side when Active) --- */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><FaFacebookF /></a>
              <a href="#" className="social"><FaGoogle /></a>
              <a href="#" className="social"><FaLinkedinIn /></a>
            </div>
            <span>or use your ID for registration</span>
            
            <input 
              type="text" 
              placeholder="Name" 
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="ID (e.g. 191-15-xxxx)" 
              value={regId}
              onChange={(e) => setRegId(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={regPass}
              onChange={(e) => setRegPass(e.target.value)}
              required
            />
            
            <button type="submit" className="action-btn">Sign Up</button>
          </form>
        </div>

        {/* --- Login Form (Right Side Default) --- */}
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><FaFacebookF /></a>
              <a href="#" className="social"><FaGoogle /></a>
              <a href="#" className="social"><FaLinkedinIn /></a>
            </div>
            <span>or use your account</span>
            
            <input type="text" placeholder="ID" />
            <input type="password" placeholder="Password" />
            
            <a href="#" className="forgot-pass">Forgot your password?</a>
            <button className="action-btn">Sign In</button>
          </form>
        </div>

        {/* --- Overlay Container (The Sliding Part) --- */}
        <div className="overlay-container">
          <div className="overlay">
            
            {/* Left Panel (Register বাটন দেখাবে যখন লগইন মোডে আছে) */}
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </div>

            {/* Right Panel (Login বাটন দেখাবে যখন রেজিস্ট্রেশন মোডে আছে) */}
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with FrostyFood</p>
              <button className="ghost" onClick={() => setIsSignUp(true)}>
                Register
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;