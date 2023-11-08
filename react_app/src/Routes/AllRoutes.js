// AllRoutes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import RegistrationComponent from "../components/Pages/SignUp/RegistrationComponent";
import Login from "../components/Pages/Login/Login";
import DocuBoard from "../components/Global/Dashboards/DocuBoard";
import InvitationForm from "../components/Pages/Admin/InvitationForm";
import PickUpComponent from "../components/Global/Dashboards/PickUpComponent";
import DashboardLayout from "../components/Global/Dashboards/DashboardLayout";
import ListRolesComponent from "../components/Pages/Document/ListRolesComponent";
import ListDocumentTypesComponent from "../components/Pages/Document/ListDocumentTypesComponent";
import DocumentTypeForm from "../components/Pages/Document/DocumentTypeForm";
import RolesForm from "../components/Pages/Document/RolesForm";
import EditRoleComponent from "../components/Pages/Document/EditRoleComponent";
import RoleDetailView from "../components/Pages/Document/RoleDetailView";
import PermissionForm from "../components/Pages/Permissions/PermissionForm";
import PermissionListView from "../components/Pages/Permissions/PermissionListView";
import PermissionEditForm from "../components/Pages/Permissions/PermissionEditForm";
import EditDocumentTypeComponent from "../components/Pages/Document/EditDocumentTypeComponent";
import AdminPortal from "../components/Pages/Admin/AdminPortal";
import ProfilePage from "../components/Pages/SignUp/ProfilePage";
import Logout from "../components/Pages/Login/Logout";
import DocumentForm from "../components/Pages/Document/DocumentForm";
import AdminLayout from "../components/Pages/Admin/AdminLayout";
import DocumentListForm from "../components/Pages/Document/DocumentListForm";
import DocumentDetailView from "../components/Pages/Document/DocumentDetailView";


const AllRoutes = () => {
    return (
        <Router>
         <div className="App flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<RegistrationComponent />} />
                <Route path="/register" element={<RegistrationComponent />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/docuboard" element={<DocuBoard />} />
                <Route path="/admin_dashboard" element={<AdminPortal />} />
                <Route path="/profile_picture" element={<ProfilePage />} />
               
                <Route path="/pickup" element={<DashboardLayout><PickUpComponent /></DashboardLayout>} />
    
                {/* Adding the new routes with DashboardLayout */}
                <Route path="/list_roles" element={<DashboardLayout><ListRolesComponent /></DashboardLayout>} />
                <Route path="/roles_form" element={<DashboardLayout><RolesForm /></DashboardLayout>} />
                <Route path="//edit-role/:id" element={<DashboardLayout><EditRoleComponent /></DashboardLayout>} />
                <Route path="/roles/:id" element={<DashboardLayout><RoleDetailView /></DashboardLayout>} />
            {/* //Document Type Component */}
                <Route path="/list_document-types" element={<DashboardLayout><ListDocumentTypesComponent /></DashboardLayout>} />
                <Route path="/document_type-form" element={<DashboardLayout><DocumentTypeForm /></DashboardLayout>} />
                <Route path="/edit-document-type/:id" element={<DashboardLayout><EditDocumentTypeComponent /></DashboardLayout>} />
                {/* //Permission Component */}
                <Route path="/permissions" element={<DashboardLayout><PermissionForm /></DashboardLayout>} />
                <Route path="/list_permissions" element={<DashboardLayout><PermissionListView /></DashboardLayout>} />
                <Route path="/edit-permission/:id" element={<DashboardLayout><PermissionEditForm /></DashboardLayout>} />
                {/* //Invitation Component */}
                <Route path="/invitation" element={<DashboardLayout><InvitationForm /></DashboardLayout>} />
                {/* Documents */}
                <Route path="/document" element={<AdminLayout><DocumentForm /></AdminLayout>} />
                <Route path="/document_list" element={<AdminLayout><DocumentListForm /></AdminLayout>} />
                <Route path="/documents/:documentId" element={<AdminLayout><DocumentDetailView /></AdminLayout>} />
i


                
            </Routes>
            </main>
            <Footer />
        </div>
    </Router>
    
    );
};

export default AllRoutes;
