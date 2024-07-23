import PostsWall from "./PostsWall/PostsWall";
import {useCallback, useRef, useState} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/reducer/profile";
import User from "./User/User";

function PageProfile({user, posts}) {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [input, setInput] = useState('');

    const inputHandler = useCallback(()=> {
        setInput(inputRef.current.value);
    },[inputRef]);

    const _addPost = useCallback(()=> {
        if(input.length===0) return;
        dispatch(addPost(input))
        setInput('');
    },[input]);


    return (
        <section className={"page-profile"}>
            <User {...user}/>
            <Writer value={input} onChange={inputHandler} onCLick={_addPost} inputRef={inputRef}/>
            <PostsWall posts={posts}/>
        </section>
    );
}

export default PageProfile;