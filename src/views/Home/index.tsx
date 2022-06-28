/* eslint-disable react-hooks/rules-of-hooks */
import './Style.css'
import { useState } from "react"
import usePostBlog from "../../utils/postBlogs/usePostBlogs";
const Home = () => {
    const [title, setTitle] = useState<String>("");
    const [body, setBody] = useState<String>("");


    const [res, apiMethod] = usePostBlog({
        url: '', headers: { ContentType: 'text/plain' }, payload: {
            title: title as string,
            body: body as string,
            userId: 1,
        }
    });
    const handlePost = (e: any): void => {
        e.preventDefault();
        apiMethod()
        setTitle("")
        setBody("")
    }

    return (
        <>
            <div className="create">
                <h2>Add a Blog</h2>
                <form onSubmit={handlePost} className="form">
                    <label>Blog Title</label>
                    <input
                        type="text"
                        required
                        // value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog Body:</label>
                    <textarea
                        required
                        // value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button className="button">Adding Blog</button>
                </form>
            </div>
            <hr />
            
        </>
    )
}

export default Home;
