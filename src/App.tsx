import './App.css';
import { Blog } from './types/types';
import useGetBlogs from './utils/getBlogs/useGetBlogs';
import usePostBlog from './utils/postBlogs/usePostBlogs';
import { SnackbarProvider } from "notistack";

function App() {
  const [res, apiMethod] = usePostBlog({
    url: '', headers: { ContentType: 'text/plain' }, payload: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
  });
  const { data, error } = useGetBlogs<Blog>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return (
    <>
      <div>
        <p> {data.title}</p>
        <button onClick={() => { apiMethod() }} type="button">klkjdf</button>
      </div>
    </>
  )
}

export default App;
