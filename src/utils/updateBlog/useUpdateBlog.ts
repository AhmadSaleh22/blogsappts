import { useCallback, useState } from "react";
import { PostRequest } from "../../types/types";

const usePostBlog = ({ url, headers, payload }: PostRequest) => {
    const [res, setRes] = useState({ data: null, error: null, isLoading: false });
    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [url, headers, payload])
    return [res, callAPI as any];
}

export default usePostBlog;