import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Course from './pages/Course/Course';
import Membership from './pages/Membership/Membership';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Literature from './pages/Literature/Literature';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/courses' element={<Course/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/careers' element={<Membership/>}/>
      <Route path='/course-detail' element={<CourseDetail/>}/>
      <Route path='/blog-detail' element={<BlogDetail/>}/>
      <Route path='/about' element={<Literature/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);  
