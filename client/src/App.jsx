import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import Programs from './pages/Programs.jsx';
import ProgramDetail from './pages/ProgramDetail.jsx';
import SpecializationDetail from './pages/SpecializationDetail.jsx';
import About from './pages/About.jsx';
import News from './pages/News.jsx';
import NewsDetail from './pages/NewsDetail.jsx';
import Admissions from './pages/Admissions.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/admin/Login.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug/:specSlug" element={<SpecializationDetail />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<News />} />
          <Route path="/insights/:slug" element={<NewsDetail />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function AdminLayout() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Edge Institute of Technology | Think Beyond. Build Beyond.';
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {isAdminRoute ? <AdminLayout /> : <PublicLayout />}
    </>
  );
}