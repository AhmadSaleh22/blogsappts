import { useParams } from 'react-router-dom';
import { Blog } from '../../types/types';
import useGetBlogs from '../../utils/getBlogs/useGetBlogs';

export const BlogPage = () => {

    const params = useParams()
    const { data, error } = useGetBlogs<Blog>(
        `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );

    return (
        <div className="create">
            <h2>Here is the Blog page</h2>
            <h2>{data?.title}</h2>
            <p>{data?.body}</p>
        </div>
    )
}
