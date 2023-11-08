import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createInvitation, getUserById } from "../../../api/users_api";
import { toast } from "react-toastify";
import { useEmployee } from '../../../context/EmployeeContext';


const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Required"),
});

const InvitationForm = () => {
  const { employee } = useEmployee(); // Use the hook to get the employee object


  const formik = useFormik({
    initialValues: {
        email: '',
        inviter: employee ? employee.id : '', // Set the inviter ID as default
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Set expiration date to 24 hours from now
      const currentDate = new Date();
      const expiryDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)); // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      values.expiry_date = expiryDate.toISOString(); // Convert to ISO string format
      
      // Set the inviter ID directly from the employee context
      values.inviter = employee ? employee.id : '';
  
      createInvitation(values)
          .then(response => {
              console.log(response.data);
              resetForm();
          })
          .catch(error => {
              console.error("Error sending invitation:", error);
          });
  }
  });

  // Watch for changes in the employee object and update Formik's values
  useEffect(() => {
    if (employee) {
      formik.setFieldValue('inviter', employee.id);
    }
  }, [employee]);
  return (
    <div className="flex flex-col  mt-20 justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Send an Invitation</h2>
            
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Recipient's Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                ) : null}
            </div>

            {/* Hidden inviter field */}
            <input type="hidden" name="inviter" value={employee ? employee.id : ''} />


            {/* Hidden expiry_date field */}
            <input type="hidden" name="expiry_date" />

            <div className="mt-6">
                <button type="submit" className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-200">
                    Send Invitation
                </button>
            </div>
        </form>
    </div>
);

}

export default InvitationForm;
