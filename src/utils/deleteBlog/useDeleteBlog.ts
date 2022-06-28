import { useCallback, useState } from "react";
import { PostRequest } from "../../types/types";

const usePostBlog = ({ url, headers, payload }: PostRequest, id: number) => {
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
            .then((json) => console.log(json));
    }, [url, headers, payload])
    return [res, callAPI as any];
}

export default usePostBlog;