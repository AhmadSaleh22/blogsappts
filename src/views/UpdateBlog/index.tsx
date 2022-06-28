import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Blog } from '../../types/types';
import useGetBlogs from '../../utils/getBlogs/useGetBlogs';

export const UpdateBlog = () => {

    const params = useParams()


    // console.log("fdkfdkjfd", params.id)
    const { data, error } = useGetBlogs<Blog>(
        `https://jsonplaceholder.typicode.com/posts/${params!.id}`
    );

    const [title, setTitle] = useState(data!.title);
    const [body, setBody] = useState(data!.body);

    console.log("sdkkdskldskldkslsdkl----", data)
    // console.log("sdkkdskldskldkslsdkl----", body)
    const handlePost = (e: any): void => {
        e.preventDefault();
        // apiMethod()
        setTitle("")
        setBody("")
    }

    return (
        <div className="create">
            <h2>Add a Blog</h2>
            <form onSubmit={handlePost} className="form">
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button className="button">Adding Blog</button>
            </form>
        </div>
    )
}
