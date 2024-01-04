// AllRoutes.js
import React, { useState } from 'react';
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
import HeadComponent from "../components/Global//HeadComponent";
import Insurance from '../components/insurance/InsuranceSideBar';
import LayoutComponent from '../components/insurance/LayoutComponent';
import InsuranceLayout from '../components/insurance/InsuranceLayout';
import Template from '../components/insurance/Template';
import SendForm from '../components/insurance/SendForm';
import AddNewCustomer from '../components/insurance/AddNewCustomer';
import Settings from '../components/insurance/Settings';
import Customers from '../components/insurance/Customers';
import CreateTemplate from '../components/insurance/CreateTemplate';
import Team from '../components/insurance/Team';
import BuyCredit from '../components/insurance/BuyCredit';
import Agency from '../components/insurance/Agency';
import Agent from '../components/insurance/Agent';
import CreateCustomer from '../components/insurance/CreateCustomer';
import ListCustomer from '../components/insurance/ListCustomer';
import CreateAgents from '../components/insurance/CreateAgents';
import ListAgents from '../components/insurance/ListAgents';    
import CreateAgentForm from '../agents/users/CreateAgentForm';
import ClientDashboardLayout from '../Dashboard/ClientDashboardLayout';
import CalendarComponent from '../Dashboard/CalendarComponent';
import ServicePage from '../Dashboard/ServicePage';
import Customer from '../Dashboard/Customer';
import IntegrationItem from '../Dashboard/IntegrationItem';
import SettingsPageLayout from '../Dashboard/SettingsPageLayout';
import MyProfile from '../Dashboard/MyProfile';
import  MyBusiness from '../Dashboard/MyBusiness';
import MyTeam from '../Dashboard/MyTeam';
import  MyServices from '../Dashboard/MyServices';
import LocationSetup from '../Dashboard/LocationSetup';
import BookingPageLayout from '../Dashboard/BookingPageLayout';
import OverViewPage from '../Dashboard/OverViewPage';
import BookingPolicy from '../Dashboard/BookingPolicy';
import BookingPreferences from '../Dashboard/BookingPreferences';
import Customization from '../Dashboard/Customization';
import AddOn from '../Dashboard/AddOn';
import PaymentPage from '../Dashboard/PaymentPage';
import Reports from '../Dashboard/Reports';
import Notifications from '../Dashboard/Notification';
import Reviews from '../Dashboard/Reviews';
import Invoices from '../Dashboard/Invoices';
import TimeSlot from '../Dashboard/TimeSlot';
import HelpAndSupport from '../Dashboard/HelpAndSupport';
import  Blog from '../Dashboard/Blog';
import ReferAFriend from '../Dashboard/ReferAFriend';
import DownloadApp from '../Dashboard/DownloadApp';

const AllRoutes = () => {
    const [showJoinModal, setShowJoinModal] = useState(false);

    const toggleJoinModal = () => {
      setShowJoinModal(!showJoinModal);
    };
    return (
        <Router>
         <div className="App flex flex-col min-h-screen">
            {/* <HeadComponent onJoinClick={toggleJoinModal}/> */}
            <main className="flex-grow">
            <Routes>
            <Route path="/" element={<Home showJoinModal={showJoinModal} toggleJoinModal={toggleJoinModal} />} />
                <Route path="/signup" element={<RegistrationComponent />} />
                <Route path="/register" element={<RegistrationComponent />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/docuboard" element={<DocuBoard />} />
                <Route path="/admin_dashboard" element={<AdminPortal />} />
                <Route path="/profile_picture" element={<ProfilePage />} />
                <Route path="/insurance" element={<Insurance />} />

                <Route path="mydashboard" element={<ClientDashboardLayout />} />
                <Route path="/calendar" element={<ClientDashboardLayout><CalendarComponent /></ClientDashboardLayout>} />
                <Route path="/services" element={<ClientDashboardLayout><ServicePage /></ClientDashboardLayout>} />
                <Route path="/customer" element={<ClientDashboardLayout><Customer /></ClientDashboardLayout>} />
                <Route path="/integrations" element={<ClientDashboardLayout><IntegrationItem /></ClientDashboardLayout>} />

               


                    <Route path="setting/" element={<ClientDashboardLayout><SettingsPageLayout /></ClientDashboardLayout>} >
                    {/* Define a route for /profile as a child of /settings */}
                    <Route path="profile" element={<MyProfile />} />
                    <Route path="myBusiness" element={<MyBusiness />} />
                    <Route path="myTeam" element={<MyTeam />} />
                    <Route path="myServices" element={<MyServices />} />
                    <Route path="locationSetup" element={<LocationSetup />} />
                    <Route path="timeslot" element={<TimeSlot />} />
                    <Route path="referAfriend" element={<ReferAFriend />} />

                    {/* ...define other nested routes as needed... */}
                    </Route>

                    <Route path="setting/" element={<ClientDashboardLayout><SettingsPageLayout /></ClientDashboardLayout>} >
                        {/* Nested index route for bookingpage within settings */}
                    <Route path="bookingpage" element={<BookingPageLayout />} />
                    <Route path="bookingpage/overview" element={<OverViewPage />} />
                    <Route path="bookingpage/policy" element={<BookingPolicy />} />
                    <Route path="bookingpage/preferences" element={<BookingPreferences />} />
                    <Route path="bookingpage/addon" element={<AddOn />} />
                    <Route path="bookingpage/customization" element={<Customization />} />
                        {/* ... other child routes of setting ... */}
                    </Route>
                  
                    <Route path="setting/" element={<ClientDashboardLayout><SettingsPageLayout /></ClientDashboardLayout>} >
                        {/* Nested index route for paymentpage within settings */}
                    <Route path="payments" element={<PaymentPage />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="HelpAndupport" element={<HelpAndSupport />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="downloadApp" element={<DownloadApp />} />
                        {/* ... other child routes of setting ... */}
                    </Route>


    
                {/* Adding the new routes with DashboardLayout */}
                <Route path="/list_roles" element={<DashboardLayout><ListRolesComponent /></DashboardLayout>} />
                <Route path="/roles_form" element={<DashboardLayout><RolesForm /></DashboardLayout>} />
                <Route path="/edit-role/:id" element={<DashboardLayout><EditRoleComponent /></DashboardLayout>} />
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

                {/* // Imsurance Component */}
                <Route path="templates" element={<InsuranceLayout> <Template /> </InsuranceLayout> } />
                <Route path="/insurance_layout" element={<InsuranceLayout> <LayoutComponent /> </InsuranceLayout>} />
                <Route path="/send-form" element={<InsuranceLayout> <SendForm /> </InsuranceLayout>} />
                <Route path="/add-new-customer" element={<InsuranceLayout> <AddNewCustomer /> </InsuranceLayout>} />
                <Route path="/settings" element={<InsuranceLayout> <Settings /> </InsuranceLayout>} />
                <Route path="/customers" element={<InsuranceLayout> <Customers /> </InsuranceLayout>} />
                <Route path="/create-template" element={<InsuranceLayout> <CreateTemplate /> </InsuranceLayout>} />
                <Route path="/team" element={<InsuranceLayout> <Team /> </InsuranceLayout>} />
                <Route path="/buy-credits" element={<InsuranceLayout> <BuyCredit /> </InsuranceLayout>} />
                <Route path="/agency" element={<InsuranceLayout> <Agency /> </InsuranceLayout>} />
                <Route path="/agent" element={<InsuranceLayout> <Agent /> </InsuranceLayout>} />
                <Route path="/create-customer" element={<InsuranceLayout> <CreateCustomer /> </InsuranceLayout>} />
                <Route path="/list-customer" element={<InsuranceLayout> <ListCustomer /> </InsuranceLayout>} />
                <Route path="/create-agents" element={<InsuranceLayout> <CreateAgentForm /> </InsuranceLayout>} />
                <Route path="/list-agents" element={<InsuranceLayout> <ListAgents /> </InsuranceLayout>} />

i


                
            </Routes>
            </main>
            <Footer />
        </div>
    </Router>
    
    );
};

export default AllRoutes;
