import { useState } from 'react';
import { supabase } from '../utils/SupabaseClient';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) console.error(error);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <input type="text" placeholder="Full Name" onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <a href="/login">Login</a>
    </div>
  );
}
