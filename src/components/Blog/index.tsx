import { Button, Card } from '@material-ui/core';
import { CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../../types/types'
import useDeleteBlog from '../../utils/deleteBlog/useDeleteBlog';
import './style.css';


const BlogItem = ({ title, body, id }: Blog, onRemove: (id: number) => any) => {

    const navigate = useNavigate();

    const [res, apiMethod] = useDeleteBlog({
        url: '', headers: { ContentType: 'text/plain' }, payload: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    }, id!.toString());

    const onDelete = () => {
        apiMethod();
        onRemove(parseInt(id as string));
    }
    return (
        <Card style={{ width: '80%', margin: "20px auto", textAlign: "center" }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={() => onDelete()}>Delete</Button>
                <Button size="small" onClick={() => navigate(`../Blogs/:${id}`, { replace: true })}>Edit</Button>
            </CardActions>
        </Card >
    )
}

export default BlogItem