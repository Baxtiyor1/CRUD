import { createContext, useState } from "react";

const PostIdContext = createContext()

function PostIdProvider({ children }) {
    let [postId, setPostId] = useState(0)


    return (
        <PostIdContext.Provider value={{ postId, setPostId }}>{children}</PostIdContext.Provider>
    )

}

export { PostIdContext, PostIdProvider }