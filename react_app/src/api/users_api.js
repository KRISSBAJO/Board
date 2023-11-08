import axios from 'axios';
import { ENDPOINTS } from './endPoint'; 


const apiRequest = async (method, endpoint, data, withToken = false, withUserId = false) => {
    let headers = {
        'Content-Type': 'application/json'
    };

    if (withToken || withUserId) {
        const token = localStorage.getItem("token");
        if (!token) {
            return {
                success: false,
                message: 'No authentication token found.'
            };
        }
        headers['Authorization'] = `Token ${token}`;
    }

    // If you have specific logic that requires userId when 'withUserId' is true, you can add that here
    if (withUserId) {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            return {
                success: false,
                message: 'No userId found.'
            };
        }
        // Assuming you want to add userId to data. Modify if necessary.
        data = { ...data, userId }; 
    }

    try {
        const response = await axios({
            method,
            url: endpoint,
            data,
            headers
        });

        if (response.status.toString().startsWith('2')) { 
            return {
                success: true,
                data: response.data
            };
        } else {
            return {
                success: false,
                message: response.data.detail || 'Unexpected server response.'
            };
        }
    } catch (error) {
        let errorMessage = 'An error occurred during the request.';
        if (error.response) {
            errorMessage = error.response.data.message || error.response.data.detail || 'Server responded with an error.';
        } else if (error.request) {
            errorMessage = 'No response received from the server.';
        }
        return {
            success: false,
            message: errorMessage
        };
    }
};
//Login 

export const loginAPI = async (email, password) => {
    const endpoint = ENDPOINTS.LOGIN;
    const data = { email, password };
    const response = await apiRequest('POST', endpoint, data);

    if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        if (response.data.userId) {
            localStorage.setItem("loggedInUserId", response.data.userId);
        }
    }
    
    
    return response;
};

// apiHelper.js
// api.js or wherever your API request functions are defined
export const apiLogoutRequest = async (method, url, body = null, requiresAuth = false) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // If authentication is required, use 'Token' instead of 'Bearer'
        ...(requiresAuth ? { 'Authorization': `Token ${localStorage.getItem('token')}` } : {})
      },
      ...(body ? { body: JSON.stringify(body) } : {})
    };
  
    const response = await fetch(url, options);
  
    if (response.status === 204) {
      // For No Content response, return null or an appropriate message.
      return null;
    } else {
      // If the response is not a 204, then parse and return the JSON.
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }
      return responseData;
    }
  };
  
  export const logoutUser = async () => {
    try {
      const response = await apiLogoutRequest('POST', ENDPOINTS.LOGOUT, null, true);
      // Handle the response as needed, possibly return something or not depending on your use case
      return response;
    } catch (error) {
      // Handle any errors that occur during the API request
      throw error;
    }
  };

// CREATE (POST) without requiring token (for registration)
export const createUserNoToken = async (userData) => {
    return await apiRequest('POST', ENDPOINTS.REGISTER, userData, false); 
};


// CREATE (POST) with token (for creating users from admin/backend)
export const createUser = async (userData) => {
    return await apiRequest('POST', ENDPOINTS.USERS, userData, true);
};


// READ (GET) - Single User
export const getUserById = async (userId) => {
    const endpoint = `${ENDPOINTS.USERS}${userId}/`;
    return await apiRequest('GET', endpoint, null, true);
};

// READ (GET) - All Users
export const getAllUsers = async () => {
    return await apiRequest('GET', ENDPOINTS.USERS, null, true);
};

// UPDATE (PUT)
export const updateUser = async (userId, updatedData) => {
    const endpoint = `${ENDPOINTS.USERS}${userId}/`;
    return await apiRequest('PUT', endpoint, updatedData, true);
};



// DELETE
export const deleteUser = async (userId) => {
    const endpoint = `${ENDPOINTS.USERS}${userId}/`;
    return await apiRequest('DELETE', endpoint, null, true);
};

export const createInvitation = async (invitationData) => {
    return await apiRequest('POST', ENDPOINTS.INVITATION, invitationData, true);
}

export const updateProfilePicture = async (userId, file) => {
    const formData = new FormData();
    formData.append('profile_picture', file);

    // Endpoint should point to the user's update URL
    const endpoint = `${ENDPOINTS.USERS}${userId}/`;

    // You do not need to set 'Content-Type': 'multipart/form-data',
    // axios does it automatically when you send FormData
    let headers = {
        'Authorization': `Token ${localStorage.getItem("token")}`,
    };

    try {
        const response = await axios.patch(endpoint, formData, { headers });

        if (response.status.toString().startsWith('2')) {
            return {
                success: true,
                data: response.data
            };
        } else {
            return {
                success: false,
                message: response.data.detail || 'Unexpected server response.'
            };
        }
    } catch (error) {
        let errorMessage = 'An error occurred during the request.';
        if (error.response) {
            errorMessage = error.response.data.message || error.response.data.detail || 'Server responded with an error.';
        } else if (error.request) {
            errorMessage = 'No response received from the server.';
        }
        return {
            success: false,
            message: errorMessage
        };
    }
};