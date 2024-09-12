import useLogin from '@/hooks/useLogin';
import React, { useState } from 'react';
import { FaFacebook, FaApple, FaGoogle, FaTimes } from 'react-icons/fa';

interface SignInProps {
  onClose: () => void;
  onSwitch: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const [{isLoading, error}, login] = useLogin()

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
    onClose()
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[10000]">
      <div className="relative w-full max-w-sm p-4 sm:p-6 bg-white rounded-lg shadow-lg z-[10001]">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3">Sign In</h2>
        <p className="text-center mb-4 text-xs sm:text-sm">
          Achieve academic excellence with personalized learning—login to start your journey!
        </p>
        <form onSubmit={handleLogin}>

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={handleEmailChange} 
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green text-xs sm:text-sm"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={handlePasswordChange} 
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green text-xs sm:text-sm"
        />
        
        <button 
          className="w-full py-1.5 mb-3 text-white bg-custom-green rounded-lg hover:bg-green-600 text-xs sm:text-sm"
        >
          {isLoading ? "loading don't press" : "Login"}
        </button>
        </form>
        
        
        <p className="text-center text-xs sm:text-sm">
          Need an account? <a href="#" onClick={onSwitch} className="text-custom-green hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
