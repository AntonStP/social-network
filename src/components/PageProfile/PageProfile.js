import PostsWall from "./PostsWall/PostsWall";
import {useCallback} from "react";
import Writer from "../baseComponents/gui/Writer/Writer";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/reducer/profile";
import User from "./User/User";

function PageProfile({user, posts, currentPost}) {
    const dispatch = useDispatch();


    const _addPost = useCallback((value)=> {
        dispatch(addPost(value));
    },[]);


    return (
        <section className={"page-profile"}>
            <User {...user}/>
            <Writer onCLick={_addPost}/>
            <PostsWall posts={posts}/>
        </section>
    );
}

export default PageProfile;