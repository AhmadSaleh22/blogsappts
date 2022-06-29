import './App.css';
import Login from './components/LoginForm';
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BlogPage } from './views/BlogPage';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="Blogs/:id" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App;
