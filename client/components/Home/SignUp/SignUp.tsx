import useSignUp from '@/hooks/useSignUp';
import React, { useState } from 'react';
import { FaFacebook, FaApple, FaGoogle, FaTimes } from 'react-icons/fa';

interface SignUpProps {
  onClose: () => void;
  onSwitch: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onClose, onSwitch }) => {
  const [full_name, setFullName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const [{isLoading, error}, signup] = useSignUp()

  const handleSignUp = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose()
    await signup(full_name, phone_number, username, email, password);
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
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3">Sign Up</h2>
        <p className="text-center mb-4 text-xs sm:text-sm">
          Join our community for personalized, engaging learning. Create your account now!
        </p>
        
        {/* <button className="flex items-center justify-center w-full py-1.5 mb-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-xs sm:text-sm">
          <FaFacebook className="mr-1.5" />
          Continue with Facebook
        </button>
        
        <button className="flex items-center justify-center w-full py-1.5 mb-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900 text-xs sm:text-sm">
          <FaApple className="mr-1.5" />
          Continue with Apple
        </button>
        
        <button className="flex items-center justify-center w-full py-1.5 mb-3 text-black bg-white border rounded-lg hover:bg-gray-100 text-xs sm:text-sm">
          <FaGoogle className="mr-1.5" />
          Continue with Google
        </button> */}
      <form onSubmit={handleSignUp}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={full_name} 
          onChange={handleFullNameChange} 
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green text-xs sm:text-sm"
        />
        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phone_number} 
          onChange={handlePhoneChange} 
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green text-xs sm:text-sm"
        />
        <input 
          type="text" 
          placeholder="username" 
          value={username} 
          onChange={handleUsernameChange} 
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green text-xs sm:text-sm"
        />
        
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
          {isLoading? "don't press" : "Create Account"}
        </button>
        
      </form>
        <p className="text-center text-xs sm:text-sm">
          Already have an account? <a href="#" onClick={onSwitch} className="text-custom-green hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
