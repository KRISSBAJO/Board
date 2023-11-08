import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/docu.png';
import profilePic1 from '../../../assets/images/login.png';
import submitIcon from '../../../assets/images/submit.svg';  // Import the submit.svg
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../../../api/users_api';
import { useEmployee } from '../../../context/EmployeeContext';
import IsLoadingComponent from '../../Hooks/IsLoading';

// Validation Schema outside your component
const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Required'),
    password: yup.string().required('Required'),
  });
  
  const Login = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const formik = useFormik({
      initialValues: {
          email: '',
          password: '',
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
         
          try {
              const response = await loginAPI(values.email, values.password);
              if (response.data && response.data.token) {
                  toast.success('Logged in successfully');
                  formik.resetForm(); 
      
                  // Check the role directly from the response data
                  if (response.data.role === 'Admin') { // Assuming the API returns the role here
                      setShowModal(true);
                  } else {
                      navigate('/docuboard'); // Default navigation for non-admin users
                  }
              } else {
                  toast.error(response.message || 'Login failed');
              }
          } catch (error) {
              // Handle any errors that occur during the API request
              toast.error(error.response?.data?.message || 'An error occurred during login');
              console.error(error);
          }
      },
    });
    // Add a modal component here (simplified version)
    const AdminModal = () => (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Welcome Admin</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">Choose the dashboard you wish to access:</p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
                  onClick={() => { navigate('/admin_dashboard'); setShowModal(false); }}
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  Admin Dashboard
                </button>
                <button
                  className="mx-auto bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow mt-3"
                  onClick={() => { navigate('/docuboard'); setShowModal(false); }}
                >
                  Document Board
                </button>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  className="mx-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded shadow"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${profilePic1})` }}>
            <div className="absolute inset-0 bg-black opacity-20 mb-20"></div>
            <div className="flex flex-col items-center justify-center  mx-auto p-6 md:p-24 max-w-7xl">
                <div className="bg-gray-800 bg-opacity-90 p-6 md:p-12 max-w-3xl w-full md:w-2/5 h-auto rounded-md shadow-lg">
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="LogaXP Logo" className="w-20 mr-2" />
                    <h3 className="text-3xl text-white">DocCenter</h3>
                </div>
    
                    <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 relative">
            <input
                type="email"
                name="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                autoComplete='email'
           />
           {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
            </div>
            </div>
            <div className="mb-4 relative">
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="px-4 py-2 w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="current-password"
            />
            {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
            </div>
            </div>

        <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-300">
              <input type="checkbox" className="mr-2"/>
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-400 hover:underline">Forgot password?</Link>
          </div>

          <button type="submit" className="btn btn-primary w-1/2 mx-auto py-2 rounded bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                            <img src={submitIcon} alt="Submit" className="mr-2" />  {/* Add the icon here */}
                            Login 
                        </button>
                    </form>
                    <div className="mt-8 text-center text-gray-300">
                        Don't have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
                    </div>
                </div>
            </div>
            {showModal && <AdminModal />}
        </div>
    );
};

export default Login;