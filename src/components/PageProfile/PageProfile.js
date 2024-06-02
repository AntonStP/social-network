import PostsWall from "./PostsWall/PostsWall";
import {useCallback, useRef, useState} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";

function PageProfile({posts}) {
    const inputRef = useRef();
    const [input, setInput] = useState('');
    const [_posts, setPosts] = useState(posts);

    const inputHandler = useCallback(()=> {
        setInput(inputRef.current.value);
    },[inputRef]);

    const addPost = useCallback(()=> {
        if(input.length===0) return;
        setPosts(p=> [...p, {message: input}]);
        setInput('');
    },[input]);


    return (
        <section className={"page-profile"}>
            <Writer value={input} onChange={inputHandler} onCLick={addPost} inputRef={inputRef}/>
            <PostsWall posts={_posts}/>
        </section>
    );
}

export default PageProfile;