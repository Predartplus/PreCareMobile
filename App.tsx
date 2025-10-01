import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrescriptionProvider } from '../PreShopMobile/screens/PrescriptionDetails/PrescriptionContext'; // Import Prescription Context
import { Provider as PaperProvider } from "react-native-paper";

// Import all screen components
import LoginScreen from '../PreShopMobile/screens/login/LoginScreen';
import SignUpScreen from '../PreShopMobile/screens/CreateAccount/CreateAccount';
import ForgotPassword from '../PreShopMobile/screens/ResetPassword/ResetPassword';
import HomeScreen from '../PreShopMobile/screens/HomeScreen/HomeScreen';
import Profile from '../PreShopMobile/screens/Profile/Profile';
import Add from '../PreShopMobile/screens/AddCard/BookAppointment';
import Settings from '../PreShopMobile/screens/SettingPage/SettingPage';
import AddProfile from './screens/AddProfile/AddProfile';
import PrescriptionDetails from './screens/PrescriptionDetails/PrescriptionDetails';
import PasswordChange from '../PreShopMobile/screens/ChangePassword/PasswordChange';
import ChangeEmail from './screens/ChangeEmail/ChangeEmail';
import ChangePhoneNumber from './screens/ChangePhoneNumber/ChangePhoneNumber';
import Patient from './screens/AddProfile/SelectProfile/Patient/Patient';
import Doctor from './screens/AddProfile/SelectProfile/Doctor/Doctor';
import Hospital from './screens/AddProfile/SelectProfile/Hospital/Hospital';
import Tenant from './screens/AddProfile/SelectProfile/Tenant/Tenant';
import Calendar from './screens/Calendar/Calendar';
import EditPersonalDetails from './screens/EditPersonalDetails/EditPersonalDetails';
import Medical from './screens/Medical/Medical';
import Cash from './screens/cash/cash';
import Search from './screens/Search/Search';
import History from './screens/History/History';
import Report from './screens/Reports/Report';
import Event from './screens/Event/Event';
import UserManagement from './screens/UserManagement/UserManagement';
import PatientSearch from './screens/Search/PatientSearch';
import DoctorSearch from './screens/Search/DoctorSearch';
import HospitalSearch from './screens/Search/HospitalSearch';
import AppointmentsSearch from './screens/Search/AppointmentsSearch';
import LabSearch from './screens/Search/LabsSearch';
import MedicalSearch from './screens/Search/MedicalsSearch';
import User from './screens/UserManagement/User';
import Menu from './screens/UserManagement/Menus';
import AddMenuScreen from './screens/UserManagement/Add/AddMenu';
import AddUser from './screens/UserManagement/Add/AddUser';
import Roles from './screens/UserManagement/Roles';
import AddRoleScreen from './screens/UserManagement/Add/AddRoles';
import DoctorReport from './screens/Reports/Report/DoctorReport';
import AppointmentReport from './screens/Reports/Report/AppointmentReport';
import PaymentReport from './screens/Reports/Report/PaymentReport';
import DischargeReport from './screens/Reports/Report/DischargeReport';
import SurveyReport from './screens/Reports/Report/SurveyReport';
import EventReport from './screens/Reports/Report/EventReport';
import PatientHistory from './screens/History/HistoryDetails/PatientHistory';
import AppointmentHistory from './screens/History/HistoryDetails/AppointmentHistory';
import PaymentHistory from './screens/History/HistoryDetails/PaymentHistory';
import FamilyMedicalHistory from './screens/History/HistoryDetails/FamilyMedicalHistory';
import EventSurvey from './screens/Event/EventDetails/Survey';
import MedicalCamp from './screens/Event/EventDetails/MedicalCamp';
import ConferencePage from './screens/Event/EventDetails/Conference';
import SubscriptionPage from './screens/Subscription/Subscription';
import EventCreationPage from './screens/Master/Master';
import CustomerSurveyPage from './screens/Event/EventDetails/SurveyDetails/CustomerSatisfactionSurvey';
import MedicalCampCreate from './screens/Master/EventCreation/MedicalCampCreate';
import ConferenceCreate from './screens/Master/EventCreation/ConferenceCreate';
import SurveyCreate from './screens/Master/EventCreation/SurveyCreation';
import DashboardScreen from './screens/LandingPage/LandingPage';
import AdmissionOrderScreen from './screens/AddmissionDetails/AdmissionOrder';
import AdmissionDetailsScreen from './screens/AddmissionDetails/AdmissionDetails';
import RoomBooking from './screens/RoomBooking/RoomBooking';
import TenantPage from './screens/UserManagement/Tenant';
import AddTenantPage from './screens/UserManagement/Add/AddTenant';
import LOVMaster from './screens/UserManagement/LOVMaster';
import HospitalPage from './screens/UserManagement/Hospital';
import AddUserPage from './screens/UserManagement/Add/AddUser';
import AddHospitalScreen from './screens/UserManagement/Add/AddHospital';
import AssignRole from './screens/UserManagement/AssignRole';
import RightsPage from './screens/UserManagement/Rights';
import BasicDetails from './screens/AddProfile/SelectProfile/Doctor/details/BasicDetails';
import DoctorEducation from './screens/AddProfile/SelectProfile/Doctor/details/DoctorEducation';
import DoctorAddress from './screens/AddProfile/SelectProfile/Doctor/details/DoctorAddress';
import DoctorAwardsLanguages from './screens/AddProfile/SelectProfile/Doctor/details/DoctorAwardsLanguages';
import DoctorSkillExperience from './screens/AddProfile/SelectProfile/Doctor/details/DoctorSkillExprience';
import DoctorTimeSlot from './screens/AddProfile/SelectProfile/Doctor/details/DoctorTimeSlot';
import Laboratory from './screens/AddProfile/SelectProfile/Laboratory/Laboratory';
import DocumentUpload from './screens/DocumentUpload/DocumentUpload';
import AddLov from './screens/UserManagement/Add/AddLOV';
import LaboratoryBasicDetails from './screens/AddProfile/SelectProfile/Laboratory/Details/LaboratoryBasicDetails';
import LaboratoryTimeSlot from './screens/AddProfile/SelectProfile/Laboratory/Details/LaboratoryTimeSlot';
import DoctorTiming from './screens/AddProfile/SelectProfile/Doctor/details/DoctorTiming';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import ProductDetailsScreen from './screens/ProductScreen/ProductDetailScreen/ProductDetailScreen';
import BuyNowScreen from './screens/ProductScreen/BuyNowScreen/BuyNowScreen';
import CartScreen from './screens/ProductScreen/Cart/CartScreen';
import ManageInventoryScreen from './screens/HomeScreen/ManageInventory/ManageInventory';
import ProductInformationScreen from './screens/HomeScreen/ManageInventory/ProductInformation/ProductInformation';
import ManufacturedByScreen from './screens/HomeScreen/ManageInventory/ProductInformation/ManfacturedBy';
import ProductMediaUpload from './screens/HomeScreen/ManageInventory/ProductInformation/ProductMediaUpload';
import ProductDescriptionScreen from './screens/HomeScreen/ManageInventory/ProductInformation/ProductDescriptionScreen';
import ServicesScreen from './screens/Services/ServicesScreen';
import HairScreen from './screens/Services/Hair/HairScreen';
import NailScreen from './screens/Services/Hair/NailScreen';
import SkinScreen from './screens/Services/Hair/SkinScreen';
import MakeupScreen from './screens/Services/Hair/MakeupScreen';
import HaircutScreen from './screens/Services/Hair/HairCut/HaircutScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <PrescriptionProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: { backgroundColor: '#f5f5f5' },
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
            {/* Authentication Screens */}
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />

            {/* Main Screens */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="AddProfile" component={AddProfile} options={{ headerTitle: 'Select Profile' }} />
            <Stack.Screen name="PrescriptionDetails" component={PrescriptionDetails} options={{ headerTitle: 'Prescription' }} />

            {/* Additional Functional Screens */}
            <Stack.Screen name="PasswordChange" component={PasswordChange} options={{ headerTitle: 'Change Password' }} />
            <Stack.Screen name="ChangeEmail" component={ChangeEmail} options={{ headerTitle: 'Change Email' }} />
            <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} options={{ headerTitle: 'Change Phone Number' }} />
            <Stack.Screen name="Calendar" component={Calendar} options={{ headerTitle: 'Calendar' }} />

            {/* Profile-Specific Screens */}
            <Stack.Screen name="Patient" component={Patient} options={{ headerTitle: 'Patient Profile' }} />
            <Stack.Screen name="Doctor" component={Doctor} options={{ headerTitle: 'Doctor Profile' }} />
            <Stack.Screen name="Hospital" component={Hospital} options={{ headerTitle: 'Hospital Profile' }} />
            <Stack.Screen name="Tenant" component={Tenant} options={{ headerTitle: 'Tenant Profile' }} />

            {/* Others */}
            <Stack.Screen name="EditPersonalDetails" component={EditPersonalDetails} options={{ headerTitle: 'Edit Details' }} />
            <Stack.Screen name="Medical" component={Medical} options={{ headerTitle: 'Medical' }} />
            <Stack.Screen name="Cash" component={Cash} options={{ headerTitle: 'Cash' }} />
            <Stack.Screen name="Search" component={Search} options={{ headerTitle: 'Search' }} />
            <Stack.Screen name="History" component={History} options={{ headerTitle: 'History' }} />
            <Stack.Screen name="Reports" component={Report} options={{ headerTitle: 'Reports' }} />
            <Stack.Screen name="Event" component={Event} options={{ headerTitle: 'Event' }} />

            <Stack.Screen
              name="UserManagement"
              component={UserManagement}
              options={{ headerShown: true, headerTitle: 'User Management' }}
            />
            <Stack.Screen
              name="PatientSearch"
              component={PatientSearch}
              options={{ headerShown: true, headerTitle: 'Patient' }}
            />
            <Stack.Screen
              name="DoctorSearch"
              component={DoctorSearch}
              options={{ headerShown: true, headerTitle: 'Doctor' }}
            />
            <Stack.Screen
              name="HospitalSearch"
              component={HospitalSearch}
              options={{ headerShown: true, headerTitle: 'Hospital' }}
            />
            <Stack.Screen
              name="AppointmentsSearch"
              component={AppointmentsSearch}
              options={{ headerShown: true, headerTitle: 'Appointment' }}
            />
            <Stack.Screen
              name="LabSearch"
              component={LabSearch}
              options={{ headerShown: true, headerTitle: 'Lab' }}
            />
            <Stack.Screen
              name="MedicalSearch"
              component={MedicalSearch}
              options={{ headerShown: true, headerTitle: 'Medical' }}
            />
            <Stack.Screen
              name="User"
              component={User}
              options={{ headerShown: true, headerTitle: 'User' }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: true, headerTitle: 'Menu' }}
            />
            <Stack.Screen
              name="AddMenuScreen"
              component={AddMenuScreen}
              options={{ headerShown: true, headerTitle: 'Add Menu' }}
            />
            <Stack.Screen
              name="AddUser"
              component={AddUser}
              options={{ headerShown: true, headerTitle: 'Add User' }}
            />

            <Stack.Screen
              name="Roles"
              component={Roles}
              options={{ headerShown: true, headerTitle: 'Roles' }}
            />

            <Stack.Screen
              name="AddRoleScreen"
              component={AddRoleScreen}
              options={{ headerShown: true, headerTitle: 'Add Roles' }}
            />

            <Stack.Screen
              name="DoctorReport"
              component={DoctorReport}
              options={{ headerShown: true, headerTitle: 'Doctor Report' }}
            />

            <Stack.Screen
              name="AppointmentReport"
              component={AppointmentReport}
              options={{ headerShown: true, headerTitle: 'Appointment Report' }}
            />

            <Stack.Screen
              name="PaymentReport"
              component={PaymentReport}
              options={{ headerShown: true, headerTitle: 'Payment Report ' }}
            />

            <Stack.Screen
              name="DischargeReport"
              component={DischargeReport}
              options={{ headerShown: true, headerTitle: 'Discharge Report ' }}
            />

            <Stack.Screen
              name="SurveyReport"
              component={SurveyReport}
              options={{ headerShown: true, headerTitle: 'Survey Report ' }}
            />

            <Stack.Screen
              name="EventReport"
              component={EventReport}
              options={{ headerShown: true, headerTitle: 'Event Report ' }}
            />

            <Stack.Screen
              name="PatientHistory"
              component={PatientHistory}
              options={{ headerShown: true, headerTitle: 'Patient History' }}
            />

            <Stack.Screen
              name="AppointmentHistory"
              component={AppointmentHistory}
              options={{ headerShown: true, headerTitle: 'Appointment History' }}
            />

            <Stack.Screen
              name="PaymentHistory"
              component={PaymentHistory}
              options={{ headerShown: true, headerTitle: 'Payment History' }}
            />

            <Stack.Screen
              name="FamilyMedicalHistory"
              component={FamilyMedicalHistory}
              options={{ headerShown: true, headerTitle: 'Family Medical History' }}
            />

            <Stack.Screen
              name="EventSurvey"
              component={EventSurvey}
              options={{ headerShown: true, headerTitle: 'Survey' }}
            />

            <Stack.Screen
              name="MedicalCamp"
              component={MedicalCamp}
              options={{ headerShown: true, headerTitle: 'Medical Camp' }}
            />

            <Stack.Screen
              name="ConferencePage"
              component={ConferencePage}
              options={{ headerShown: true, headerTitle: 'Medical Conference' }}
            />

            <Stack.Screen
              name="SubscriptionPage"
              component={SubscriptionPage}
              options={{ headerShown: true, headerTitle: 'Subscription' }}
            />

            <Stack.Screen
              name="EventCreationPage"
              component={EventCreationPage}
              options={{ headerShown: true, headerTitle: 'Master' }}
            />

            <Stack.Screen
              name="CustomerSurveyPage"
              component={CustomerSurveyPage}
              options={{ headerShown: true, headerTitle: 'Customer Survey' }}
            />

            <Stack.Screen
              name="MedicalCampCreate"
              component={MedicalCampCreate}
              options={{ headerShown: true, headerTitle: 'Medical Camp Create' }}
            />

            <Stack.Screen
              name="ConferenceCreate"
              component={ConferenceCreate}
              options={{ headerShown: true, headerTitle: 'Conference Create' }}
            />

            <Stack.Screen
              name="SurveyCreate"
              component={SurveyCreate}
              options={{ headerShown: true, headerTitle: 'Survey Create' }}
            />

            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreen}
              options={{ headerShown: false, headerTitle: 'Survey Create' }}
            />


            <Stack.Screen
              name="AdmissionOrderScreen"
              component={AdmissionOrderScreen}
              options={{ headerShown: false, headerTitle: 'Admission Details' }}
            />

            <Stack.Screen
              name="AdmissionDetailsScreen"
              component={AdmissionDetailsScreen}
              options={{ headerShown: false, headerTitle: 'Admission Details' }}
            />

            <Stack.Screen
              name="RoomBooking"
              component={RoomBooking}
              options={{ headerShown: true, headerTitle: 'Room Booking' }}
            />

            <Stack.Screen
              name="TenantPage"
              component={TenantPage}
              options={{ headerShown: true, headerTitle: 'TenantPage' }}
            />

            <Stack.Screen
              name="AddTenantPage"
              component={AddTenantPage}
              options={{ headerShown: true, headerTitle: 'AddTenantPage' }}
            />

            <Stack.Screen
              name="LOVMaster"
              component={LOVMaster}
              options={{ headerShown: true, headerTitle: 'LOVMaster' }}
            />

            <Stack.Screen
              name="HospitalPage"
              component={HospitalPage}
              options={{ headerShown: true, headerTitle: 'Hospital' }}
            />

            <Stack.Screen
              name="AddUserPage"
              component={AddUserPage}
              options={{ headerShown: true, headerTitle: 'Add User' }}
            />

            <Stack.Screen
              name="AddHospitalScreen"
              component={AddHospitalScreen}
              options={{ headerShown: true, headerTitle: 'Add Hospital' }}
            />


            <Stack.Screen
              name="AssignRole"
              component={AssignRole}
              options={{ headerShown: true, headerTitle: 'Assign Role' }}
            />

            <Stack.Screen
              name="RightsPage"
              component={RightsPage}
              options={{ headerShown: true, headerTitle: 'Rights Page' }}
            />


            <Stack.Screen
              name="BasicDetails"
              component={BasicDetails}
              options={{ headerShown: true, headerTitle: 'Basic Details' }}
            />


            <Stack.Screen
              name="DoctorEducation"
              component={DoctorEducation}
              options={{ headerShown: true, headerTitle: 'Doctor Education' }}
            />

            <Stack.Screen
              name="DoctorAddress"
              component={DoctorAddress}
              options={{ headerShown: true, headerTitle: 'Doctor Address' }}
            />

            <Stack.Screen
              name="DoctorAwardsLanguages"
              component={DoctorAwardsLanguages}
              options={{ headerShown: true, headerTitle: 'Awards & Languages' }}
            />

            <Stack.Screen
              name="DoctorSkillExperience"
              component={DoctorSkillExperience}
              options={{ headerShown: true, headerTitle: 'Skill & Experience' }}
            />

            <Stack.Screen
              name="DoctorTimeSlot"
              component={DoctorTimeSlot}
              options={{ headerShown: true, headerTitle: 'Time Slot' }}
            />


            <Stack.Screen
              name="Laboratory"
              component={Laboratory}
              options={{ headerShown: true, headerTitle: 'Laboratory' }}
            />

            <Stack.Screen
              name="DocumentUpload"
              component={DocumentUpload}
              options={{ headerShown: true, headerTitle: 'Document Upload' }}
            />

            <Stack.Screen
              name="AddLov"
              component={AddLov}
              options={{ headerShown: true, headerTitle: 'Add' }}
            />

            <Stack.Screen
              name="LaboratoryBasicDetails"
              component={LaboratoryBasicDetails}
              options={{ headerShown: true, headerTitle: 'Laboratory Basic Details' }}
            />

            <Stack.Screen
              name="LaboratoryTimeSlot"
              component={LaboratoryTimeSlot}
              options={{ headerShown: true, headerTitle: 'Laboratory Time Slot' }}
            />

            <Stack.Screen name="DoctorTiming" component={DoctorTiming} options={{ headerShown: true}} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: true}} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={{ headerShown: true}} />
            <Stack.Screen name="BuyNowScreen" component={BuyNowScreen} options={{ headerShown: true}} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: true}} />
            <Stack.Screen name="ManageInventoryScreen" component={ManageInventoryScreen} options={{ headerShown: true}} />
            <Stack.Screen name="ProductInformationScreen" component={ProductInformationScreen} options={{ headerShown: true}} />
            <Stack.Screen name="ManufacturedByScreen" component={ManufacturedByScreen} options={{ headerShown: true}} />
            <Stack.Screen name="ProductMediaUpload" component={ProductMediaUpload} options={{ headerShown: true}} />
            <Stack.Screen name="ProductDescriptionScreen" component={ProductDescriptionScreen} options={{ headerShown: true}} />
            <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{ headerShown: true}} />
            <Stack.Screen name="HairScreen" component={HairScreen} options={{ headerShown: true}} />
            <Stack.Screen name="NailScreen" component={NailScreen} options={{ headerShown: true}} />
            <Stack.Screen name="SkinScreen" component={SkinScreen} options={{ headerShown: true}} />
            <Stack.Screen name="MakeupScreen" component={MakeupScreen} options={{ headerShown: true}} />
            <Stack.Screen name="HaircutScreen" component={HaircutScreen} options={{ headerShown: true }} />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PrescriptionProvider>
  );
};

export default App;
