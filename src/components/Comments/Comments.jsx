import { useState } from "react"

function Comments() {
let [comment, setComment] = useState([])

    fetch('https://backendsss.herokuapp.com/comments')
    .then(res => res.json())
    .then(data => setComment(data))
    
    return (
        <ul>
            {
                comment.map(com =>{
                    return(
                        <li key={com.id}>{com.body}</li>
                    )
                })
            }
        </ul>
    )
}
export default Comments