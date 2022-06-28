import { Button, Card } from '@material-ui/core';
import { CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../../types/types'
import useDeleteBlog from '../../utils/deleteBlog/useDeleteBlog';
import useUpdateBlog from '../../utils/updateBlog/useUpdateBlog';
import './style.css';


const BlogItem = ({ blog, onRemove }: { blog: Blog, onRemove: (id: number) => any }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [blogData, setBlogData] = useState<Blog | undefined>();

    useEffect(() => {
        setBlogData({ ...blog })
    }, [blog])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBlogData({ ...blog, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const [res, apiMethod] = useDeleteBlog({
        url: '', headers: { ContentType: 'text/plain' }, payload: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    }, blog.id as string);

    const onDelete = () => {
        apiMethod();
        onRemove(parseInt(blog.id as string));
    }

    // console.log("dlkdfkldfkl=======", blog.id);

    const [response, updateBlogMethod] = useUpdateBlog({
        url: `https://jsonplaceholder.typicode.com/posts/${blog?.id?.toString()}`, headers: { ContentType: 'text/plain' }, payload: {
            title: blogData?.title as string,
            body: blogData?.body as string,
            id: blog?.id as number,
        }
    });


    return (
        <Card style={{ width: '80%', margin: "20px auto", textAlign: "center" }}>
            {edit ? <>
                <form onSubmit={(e) => { e.preventDefault(); setEdit(!edit); }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <input value={blogData?.title} name="title" onChange={handleChange} />
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <input value={blogData?.body} name="body" onChange={handleChange} />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" type="submit">Save</Button>
                        <Button size="small" onClick={() => setEdit(!edit)}>Cancel</Button>
                    </CardActions>
                </form>
            </> : <>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blogData?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blogData?.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" onClick={() => onDelete()}>Delete</Button>
                    <Button size="small" onClick={() => setEdit(!edit)}>Edit</Button>
                </CardActions>
            </>}
        </Card >
    )
}

export default BlogItem