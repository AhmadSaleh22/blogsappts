import { useState } from 'react'

export const index = () => {
    const [title, setTitle] = useState<String>('');
    const [body, setBody] = useState<String>('');


    return (
        <>
            <div className="create">
                <h2>Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog Body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog</button>}
                </form>
            </div>
        </>
    )
}
