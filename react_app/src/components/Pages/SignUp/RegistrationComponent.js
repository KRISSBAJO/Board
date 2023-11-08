import React, { useState, useEffect } from 'react';
import { createUserNoToken, createUser } from '../../../api/users_api';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationModal from '../../Modal/RegistrationModal';


const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  password: Yup.string().required('Password is required'),
  client_name: Yup.string().required('Client name is required'),
    
});
function RegistrationComponent() {
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [formData, setFormData] = useState({
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: '',
      client_name: '', 
  });

  useEffect(() => {
      // Function to extract token from URL
      const extractTokenFromUrl = () => {
          const params = new URLSearchParams(window.location.search);
          return params.get('token');
      };

      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const encodedEmail = params.get('email');

    if (encodedEmail) {
        const decodedEmail = atob(encodedEmail);
        setFormData(prev => ({ ...prev, email: decodedEmail }));
    }
  
      if (code) {
        const decodedClientName = atob(code);
        setFormData(prev => ({ ...prev, client_name: decodedClientName }));
    }
    

      const urlToken = extractTokenFromUrl(); // Extract the token from URL
      if (urlToken) {
          setToken(urlToken); // If token exists, set it
      }
  }, []);

  const onRegister = (role) => {
      setUserRole(role);  // Set the user role
      setShowModal(false);  // Hide the modal
  };
  const initialFormData = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    client_name: '',
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const openModal = (role) => {
    setUserRole(role);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        // Perform form validation
        await signupSchema.validate(formData, { abortEarly: false });
        
        // Prepare the data object for the API request
        let requestData = {
            ...formData,
            role: userRole,
        };

        // If a token exists, add it to the request data
        if (token) {
            requestData = {
                ...requestData,
                token, // Add the token to the requestData object
            };
        }

        // Make the API call
        const response = await createUser(requestData);

        if (response.success) {
            // Registration was successful
            toast.success('Successfully registered!');
            resetForm();
            setShowModal(false);
        } else {
            // Registration failed
            toast.error(response.message || 'Error registering. Please try again.');
        }
    } catch (err) {
        // Handle validation errors
        if (err.inner && err.inner.length) {
            err.inner.forEach((error) => {
                toast.error(error.message);
            });
        } else {
            toast.error(err.message || 'Validation failed. Please check your data.');
        }
    }
};

  return (
    <div className="text-center py-4 mb-52 mt-20">
    

    <RegistrationModal
            onRegister={onRegister}
            onShowForm={() => setShowModal(true)}
            show={showModal}
            onClose={() => { setShowModal(false); resetForm(); }}
            />

<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
    <h2 className="text-2xl mb-4 text-center">Register as {userRole}</h2>

    <div className="flex flex-wrap -mx-3">
        <div className="w-1/2 px-3 mb-4">
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border rounded py-2 px-3 text-gray-700 w-full"
                autoComplete='email'
            />

        </div>
        <div className="w-1/2 px-3 mb-4">
            <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleInputChange}
                placeholder="Client Name"
                className="border rounded py-2 px-3 text-gray-700 w-full"
                autoComplete='client_name'
            />
        </div>

        <div className="w-1/2 px-3 mb-4">
            <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="First Name"
                className="border rounded py-2 px-3 text-gray-700 w-full"
                autoComplete='first_name'
            />
        </div>

        <div className="w-1/2 px-3 mb-4">
            <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="border rounded py-2 px-3 text-gray-700 w-full"
                autoComplete='last_name'
            />
        </div>
        <div className="w-1/2 px-3 mb-4">
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="border rounded py-2 px-3 text-gray-700 w-full"
                autoComplete="new-password"
            />
        </div>

        <div className="w-1/2 px-3 mb-4">
            <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="border rounded py-2 px-3 text-gray-700 w-full"
                 autoComplete="new-password"
            />
        </div>
    </div>

    <div className="text-center mt-4">
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
    </div>
</form>

    </div>
  );
}

export default RegistrationComponent;