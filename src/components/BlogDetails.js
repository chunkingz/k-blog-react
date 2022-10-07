import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const BlogDetails = () => {

    const { id } = useParams()
    const { blogs: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    const handleBlogDelete = () => {

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:8000/blogs/${blog.id}`, {
                    method: 'DELETE',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(blog)
                }).then(() => {
                    navigate('/')
                })

                Swal.fire(
                    'Deleted!',
                    'The blog post has been deleted.',
                    'success'
                )
            }
          })
    }

    return ( 
        <div className="blog-details">
            { error && <h2>{error}</h2> }
            { isPending && <h2>Loading...</h2> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleBlogDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;