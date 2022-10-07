import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleBlogCreate = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        setIsPending(true)

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            navigate('/')
        })
    }


    return ( 
        <div className="create">
            <h2>Add a new blog</h2>

            <form onSubmit={handleBlogCreate}>
                <label htmlFor="blog-title">Blog Title</label>
                <input type="text" id="blog-title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="blog-body">Blog Body</label>
                <textarea id="blog-body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>

                <label htmlFor="blog-author">Blog Author</label>
                <select id="blog-author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                { isPending ? <button disabled>Adding Blog Post...</button> : <button>Add Blog</button> }

            </form>
        </div>
     );
}
 
export default Create;