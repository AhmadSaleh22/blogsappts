import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { PostRequest } from "../../types/types";

const useDeleteBlog = ({ url, headers, payload }: PostRequest, id: string) => {
    const { enqueueSnackbar } = useSnackbar()
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then(() => {
            enqueueSnackbar('Deleting done successfully', {
                variant: 'success',
            })
        });
    }, [id, enqueueSnackbar])
    return [res, callAPI as any];
}

export default useDeleteBlog;