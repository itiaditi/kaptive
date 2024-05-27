import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://kaptive-e6qa.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      setTimeout(() => {
        navigate('/login');
      }, 1000);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Signup successfully',
      });

      console.log('Signup successful');
    } catch (error) {
      setError('Failed to sign up. Please try again later.');
      console.error('Signup error:', error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
            <p className="text-xs mt-4 text-[#002D74]">Register yourself</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Register'}
              </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                <NavLink color={'blue.400'} to="/login">
                  Login
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
