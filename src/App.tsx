import './App.css';
import { Blog } from './types/types';
import useGetBlogs from './utils/getBlogs/useGetBlogs';
import usePostBlog from './utils/postBlogs/usePostBlogs';
import { AllRoutes } from './utils/Routes/AllRoutes';
import Login from './components/LoginForm';
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const [res, apiMethod] = usePostBlog({
  //   url: '', headers: { ContentType: 'text/plain' }, payload: {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }
  // });
  // const { data, error } = useGetBlogs<Blog>(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );
  // if (error) return <p>There is an error.</p>
  // if (!data) return <p>Loading...</p>
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="Home" element={<Home />} />
      </Routes>
      {/* <AllRoutes /> */}
      {/* <Login /> */}
      {/* <div>
        <p> {data.title}</p>
        <button onClick={() => { apiMethod() }} type="button">klkjdf</button>
      </div> */}
    </BrowserRouter>
  )
}

export default App;
