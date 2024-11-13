import Post from "../Post/Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {deletePost} from "../../../redux/reducer/profile";

function PostsWall({posts}) {
    const dispatch = useDispatch();



    return (
        <div className="posts-wall">
            <TransitionGroup component={null}>
                {
                    posts.map(({id,message}, index) =>
                        <CSSTransition key={`post-${id}`} timeout={300} classNames={'post'}>
                            <Post message={message} deletePost={() => dispatch(deletePost(id))}/>
                        </CSSTransition>)
                }
            </TransitionGroup>
        </div>
    );
}

export default PostsWall;