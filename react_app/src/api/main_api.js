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


export function createDocumentType(data) {
    return apiRequest('post', ENDPOINTS.DOCUMENT_TYPE, data, true);
}

export function getDocumentTypes() {
    return apiRequest('get', ENDPOINTS.DOCUMENT_TYPE, null, true);
}
export function getDocumentTypeById(id) {
    return apiRequest('get', `${ENDPOINTS.DOCUMENT_TYPE}${id}/`, null, true);
}

export function updateDocumentType(id, data) {
    return apiRequest('put', `${ENDPOINTS.DOCUMENT_TYPE}${id}/`, data, true);
}



export function deleteDocumentType(id) {
    return apiRequest('delete', `${ENDPOINTS.DOCUMENT_TYPE}${id}/`, null, true);
}

export function listDocumentTypes() {
    return apiRequest('get', ENDPOINTS.DOCUMENT_TYPE, null, true);
}


//Roles

export function createRoles(data) {
    return apiRequest('post', ENDPOINTS.ROLES, data, true);
}

export function getRoles() {
    return apiRequest('get', ENDPOINTS.ROLES, null, true);
}

export function getRoleById(id) {
    return apiRequest('get', `${ENDPOINTS.ROLES}${id}/`, null, true);
}
export function updateRole(id, data) {
    const endpoint = `${ENDPOINTS.ROLES}${id}/`; 
    return apiRequest('put', endpoint, data, true); // Pass `true` if you need a token for authorization
  }
  

export function deleteRole(id) {
    return apiRequest('delete', `${ENDPOINTS.ROLES}${id}/`, null, true);
}


export function listRoles() {
    return apiRequest('get', ENDPOINTS.ROLES, null, true);
}


// API service file
export function getPermissionsOptions() {
    return apiRequest('get', ENDPOINTS.PERMISSION_OPTIONS);
}

// Fetch all permissions
export function getAllPermissions() {
    return apiRequest('get', ENDPOINTS.PERMISSIONS, null, true);
}

// Fetch a permission by its ID
export function getPermissionById(id) {
    return apiRequest('get', `${ENDPOINTS.PERMISSIONS}${id}/`, null, true);
}

// Create a new permission
export function createPermission(permissionData) {
    return apiRequest('post', ENDPOINTS.PERMISSIONS, permissionData, true);
}

// Update an existing permission
export function updatePermission(id, permissionData) {
    return apiRequest('patch', `${ENDPOINTS.PERMISSIONS}${id}/`, permissionData, true);
}

// Delete a permission
export function deletePermission(id) {
    return apiRequest('delete', `${ENDPOINTS.PERMISSIONS}${id}/`, null, true);
}


//Documents
export function createDocument(data) {
    return apiRequest('post', ENDPOINTS.DOCUMENT, data, true);
}

export function getDocuments() {
    return apiRequest('get', ENDPOINTS.DOCUMENT, null, true);
}

export function getDocumentById(id) {
    return apiRequest('get', `${ENDPOINTS.DOCUMENT}${id}/`, null, true);
}

export function deleteDocumets(id) {
    return apiRequest('delete', `${ENDPOINTS.DOCUMENT}${id}/`, null, true);
}

export function listDocuments() {
    return apiRequest('get', ENDPOINTS.DOCUMENT, null, true);
}

//Tags
export function createTags(data) {
    return apiRequest('post', ENDPOINTS.TAGS, data, true);
}

export function getTags() {
    return apiRequest('get', ENDPOINTS.TAGS, null, true);
}

export function getTagById(id) {
    return apiRequest('get', `${ENDPOINTS.TAGS}${id}/`, null, true);
}

export function updateTag(id, data) {
    return apiRequest('put', `${ENDPOINTS.TAGS}${id}/`, data, true);
}

export function deleteTag(id) {
    return apiRequest('delete', `${ENDPOINTS.TAGS}${id}/`, null, true);
}

export function listTags() {
    return apiRequest('get', ENDPOINTS.TAGS, null, true);
}

