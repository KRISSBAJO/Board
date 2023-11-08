import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserById } from '../api/users_api';

const EmployeeContext = createContext();

export const useEmployee = () => {
    const context = useContext(EmployeeContext);
    if (!context) {
        throw new Error("useEmployee must be used within an EmployeeProvider");
    }
    return context;
};

export const EmployeeProvider = ({ children }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        // Get userId of the logged-in user. For this example, I'm assuming it's stored in local storage.
        const userId = localStorage.getItem('loggedInUserId'); // Adjust this line based on where you're storing the logged-in userId

        if (userId) {
            getUserById(userId)
                .then(response => {
                    setEmployee(response.data); // Assuming the user data is in the 'data' field of the response
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                });
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <EmployeeContext.Provider value={{ employee, setEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};
