import PostsWall from "./PostsWall/PostsWall";
import {useCallback, useRef, useState} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";
import {dispatch} from "../../redux/state";

function PageProfile({profile}) {
    const {posts} = profile;
    const inputRef = useRef();
    const [input, setInput] = useState('');

    const inputHandler = useCallback(()=> {
        setInput(inputRef.current.value);
    },[inputRef]);

    const _addPost = useCallback(()=> {
        if(input.length===0) return;
        dispatch({type: "ADD-POST", message: input})
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