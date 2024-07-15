import PostsWall from "./PostsWall/PostsWall";
import {useCallback, useRef, useState} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";
import {addPost} from "../../redux/state";

function PageProfile({posts}) {
    const inputRef = useRef();
    const [input, setInput] = useState('');

    const inputHandler = useCallback(()=> {
        setInput(inputRef.current.value);
    },[inputRef]);

    const _addPost = useCallback(()=> {
        if(input.length===0) return;
        addPost(input);
        setInput('');
    },[input]);


    return (
        <section className={"page-profile"}>
            <Writer value={input} onChange={inputHandler} onCLick={_addPost} inputRef={inputRef}/>
            <PostsWall posts={posts}/>
        </section>
    );
}

export default PageProfile;