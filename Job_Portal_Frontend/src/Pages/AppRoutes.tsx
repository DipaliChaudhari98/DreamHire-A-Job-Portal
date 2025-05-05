import HomePage from '../Pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import FindJobs from './FindJobs'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FindTalentPage from '../Pages/FindTalentPage';
import TalentProfilePage from '../Pages/TalentProfilePage';
import PostJobPage from '../Pages/PostJobPage';
import JobDescPage from '../Pages/JobDescPage';
import ApplyJobPage from '../Pages/ApplyJobPage';
import CompanyPage from '../Pages/CompanyPage';

import JobHistoryPage from '../Pages/JobHistoryPage';
import SignUpPage from '../Pages/SignUpPage';
import ProfilePage from '../Pages/profilePage';
import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';
import PostedJobPage from './PostedJobsPage';
import ProtectedRoute from '../Services/ProtectedRoute';

const AppRoutes = () => {
    const user=useSelector((state:any)=>state.user);
  return  <BrowserRouter>
      <div className='relative'>
        <Header />
        <Divider size="xs" mx="md" />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/find-talent' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><FindTalentPage /></ProtectedRoute>} />
          <Route path='/post-job/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>} />
          <Route path='/jobs/:id' element={<JobDescPage />} />
          <Route path='/apply-jobs/:id' element={<ApplyJobPage />} />
          <Route path='/company/:name' element={<CompanyPage />} />
          <Route path='/posted-jobs/:id' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage /></ProtectedRoute>} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/job-history' element={<JobHistoryPage />} />
          <Route path='/talent-profile/:id' element={<TalentProfilePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  
};

export default AppRoutes;
