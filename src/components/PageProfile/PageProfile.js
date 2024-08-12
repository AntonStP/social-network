import PostsWall from "./PostsWall/PostsWall";
import {useCallback, useRef} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";
import {useDispatch} from "react-redux";
import {addPost, writePost} from "../../redux/reducer/profile";
import User from "./User/User";

function PageProfile({user, posts, currentPost}) {
    const dispatch = useDispatch();

    const inputHandler = useCallback((text)=> {
        dispatch(writePost(text));
    },[]);

    const _addPost = useCallback(()=> {
        if(currentPost.length===0) return;
        dispatch(addPost(currentPost));
        dispatch(writePost(''));
    },[currentPost]);


    return (
        <section className={"page-profile"}>
            <User {...user}/>
            <Writer value={currentPost} onChange={inputHandler} onCLick={_addPost}/>
            <PostsWall posts={posts}/>
        </section>
    );
}

export default PageProfile;