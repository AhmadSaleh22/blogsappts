import './Style.css'
import { createContext, useEffect, useState } from "react"
import usePostBlog from "../../utils/postBlogs/usePostBlogs";
import useGetBlogs from '../../utils/getBlogs/useGetBlogs';
import { Blog } from '../../types/types';
import BlogItem from '../../components/Blog';
import { TextField } from '@material-ui/core';

const UserContext = createContext<Blog[]>([]);

const Home = () => {
    const [title, setTitle] = useState<String>("");
    const [body, setBody] = useState<String>("");
    const [timeLine, setTimeLine] = useState<Blog[]>([])

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
        timeLine!.unshift({
            title: title as string,
            body: body as string,
            userId: 1,
        })
        setTitle("")
        setBody("")
    }

    const { data, error } = useGetBlogs<Blog[]>(
        "https://jsonplaceholder.typicode.com/posts"
    );

    function handleRemove(id: number) {
        const newTimeLine = timeLine!.filter((item) => item.id !== id);
        setTimeLine(newTimeLine);
    }

    useEffect(() => {
    }, [timeLine])

    useEffect(() => {
        setTimeLine(data || [])
    }, [data])




    if (error) return <p>There is an error.</p>
    if (timeLine === undefined && data === undefined) return <p>Loading...</p>

    return (
        <UserContext.Provider value={timeLine}>
            <div className="create">
                <h2>Add a Blog</h2>
                <form onSubmit={handlePost} className="form">
                    <TextField
                        style={{ width: "80%", margin: "auto", textAlign: "center" }}
                        id="outlined-basic"
                        variant="outlined"
                        label="Blog Title"
                        type="text"
                        required
                        // value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        multiline
                        required
                        label="Blog Body"
                        // value={body}
                        onChange={(e) => setBody(e.target.value)}
                        style={{ width: "80%", margin: "auto", textAlign: "center" }}
                    />
                    <button className="button">Adding Blog</button>
                </form>
            </div>
            <hr />
            {
                timeLine?.map((datas) => (
                    <BlogItem key={datas?.id} blog={{
                        title: datas?.title,
                        body: datas?.body,
                        id: datas?.id?.toString()
                    }} onRemove={() => handleRemove(parseInt(datas?.id as string))} />
                )
                )
            }
        </UserContext.Provider>
    )
}

export default Home;
