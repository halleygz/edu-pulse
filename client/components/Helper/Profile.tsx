import React, { useState } from 'react';
import { FaUser, FaChartBar, FaSignOutAlt, FaKey, FaTimes } from 'react-icons/fa';

const Profile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* Profile Button with Icon only */}
      <div
        onClick={openModal}
        className='flex items-center justify-center cursor-pointer p-2 rounded-full bg-custom-green hover:bg-green-600 transition-colors'
      >
        <FaUser className='text-white text-xl' />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[10000]">
          <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg z-[10001]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Profile Menu</h2>

            <div className="flex items-center mb-4">
              <FaUser className="mr-2 text-gray-700" />
              <span className="text-gray-700">Profile Info</span>
            </div>
            
            <div className="flex items-center mb-4">
              <FaChartBar className="mr-2 text-gray-700" />
              <span className="text-gray-700">Progress</span>
            </div>

            <div className="flex items-center mb-4">
              <FaSignOutAlt className="mr-2 text-gray-700" />
              <span className="text-gray-700">Logout</span>
            </div>

            <div className="flex items-center">
              <FaKey className="mr-2 text-gray-700" />
              <span className="text-gray-700">Change Password</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
