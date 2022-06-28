import './App.css';
import { Blog } from './types/types';
import useGetBlogs from './utils/getBlogs/useGetBlogs';
import usePostBlog from './utils/postBlogs/usePostBlogs';
import { AllRoutes } from './utils/Routes/AllRoutes';
import Login from './components/LoginForm';
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UpdateBlog } from './views/UpdateBlog';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="Blogs/:id" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App;
