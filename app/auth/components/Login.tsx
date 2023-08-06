"use client";
import { loginUser } from '@/utils/login';
import { FaGithub } from 'react-icons/fa'; 

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Samyoga Login</h1>
        <button
          onClick={loginUser}
          className="w-full p-2 text-black rounded flex items-center justify-center"
        >
          <FaGithub className="h-6 w-6 mr-2" /> 
          Login with Github
        </button>
      </div>
    </div>
  );
}
