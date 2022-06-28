import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { PostRequest } from "../../types/types";

const usePostBlog = ({ url, headers, payload }: PostRequest, id: number) => {
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    const { enqueueSnackbar } = useSnackbar()

    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                enqueueSnackbar('Successfully updating the data', {
                    variant: 'success',
                })
            });
    }, [url, headers, payload])
    return [res, callAPI as any];
}

export default usePostBlog;