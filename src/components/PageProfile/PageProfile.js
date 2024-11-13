import PostsWall from "./PostsWall/PostsWall";
import {useCallback} from "react";
import Writer from "../baseComponents/gui/writer/Writer";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/reducer/profile";
import User from "./User/User";
import Section from "../section/Section";

function PageProfile({user, posts}) {
    const dispatch = useDispatch();


    const _addPost = useCallback((value)=> {
        dispatch(addPost(value));
    },[]);


    return (
        <Section className={"page-profile"} mod={'profile'}>
            <div className={"page-profile__content"}>
                <User {...user}/>
                <Writer onCLick={_addPost}/>
                <PostsWall posts={posts}/>
            </div>
        </Section>
    );
}

export default PageProfile;