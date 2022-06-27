import './App.css';
import { Blog } from './types/types';
import useGetBlogs from './utils/getPosts/useGetBlogs';
// import { useGetBlogs } from './utils/getPosts/useGetBlogs';

function App() {
  const { data, error } = useGetBlogs<Blog>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return <p>{data.title}</p>
}

export default App;
