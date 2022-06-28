import { useCallback, useState } from "react";
import { PostRequest } from "../../types/types";
import { useSnackbar } from 'notistack'

const usePostBlog = ({ url, headers, payload }: PostRequest) => {
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    const { enqueueSnackbar } = useSnackbar()
    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                enqueueSnackbar('Important: resource will not be really posted on the server but it will be faked as if.', {
                    variant: 'success',
                })
            });
    }, [url, headers, payload])
    return [res, callAPI as any];
}

export default usePostBlog;