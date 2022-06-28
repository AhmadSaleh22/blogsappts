import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { PostRequest } from "../../types/types";

const useUpdateBlog = ({ url, payload }: PostRequest) => {
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    const { enqueueSnackbar } = useSnackbar()

    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        fetch(`${url}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                enqueueSnackbar('Updating done', {
                    variant: 'success',
                })
            });
    }, [url, payload, enqueueSnackbar])
    return [res, callAPI as any];
}

export default useUpdateBlog;