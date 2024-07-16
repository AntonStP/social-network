import Post from "../Post/Post";
import {CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import {useCallback} from "react";
import {dispatch} from "../../../redux/state";

function PostsWall({posts}) {

    const deletePost = useCallback((id)=> {
        console.log('click!')
        dispatch({type: "DELETE-POST", messageId: id})
    },[])


    return (
        <div className="posts-wall">
            <TransitionGroup component={null}>

                        {
                            posts.map(({message}, id) =>
                                <CSSTransition key={`post-${id}`} timeout={300} classNames={'post'}>
                                    <Post id={id} message={message} deletePost={()=> deletePost(id)}/>
                                </CSSTransition>)
                        }
            </TransitionGroup>
        </div>
    );
}

export default PostsWall;