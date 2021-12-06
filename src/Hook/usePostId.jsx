import { useContext } from "react";
import { PostIdContext } from "../Context/postId";

function usePostId(){
    let {postId, setPostId} = useContext(PostIdContext)

    return [postId, setPostId]
}

export default usePostId