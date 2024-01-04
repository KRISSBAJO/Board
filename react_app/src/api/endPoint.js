const USERS_API_BASE_URL = process.env.REACT_APP_USERS_API_BASE_URL;
const MAIN_API_BASE_URL = process.env.REACT_APP_MAIN_API_BASE_URL;
const HELPER_API_BASE_URL = process.env.REACT_APP_HELPER_API_BASE_URL;

export const ENDPOINTS = {
    USERS: `${USERS_API_BASE_URL}users/`,
    VALIDATE_TOKEN: `${USERS_API_BASE_URL}validate-invitation-token/`,
    REGISTER: `${USERS_API_BASE_URL}register/`,
    LOGIN: `${USERS_API_BASE_URL}login/`,
    LOGOUT: `${USERS_API_BASE_URL}logout/`,
    INVITATION: `${USERS_API_BASE_URL}invitations/`,
    // ... Add more endpoints as needed

    // Main API endpoints
    ROLES: `${MAIN_API_BASE_URL}roles/`,
    PERMISSIONS: `${MAIN_API_BASE_URL}permissions/`,
    PERMISSION_OPTIONS: `${MAIN_API_BASE_URL}permission_options/`,
    DOCUMENT: `${MAIN_API_BASE_URL}documents/`,
    DOCUMENT_TYPE: `${MAIN_API_BASE_URL}document_types/`,
    TAGS: `${MAIN_API_BASE_URL}tags/`,
    AGENTS: `${MAIN_API_BASE_URL}agents/`,
    

};

