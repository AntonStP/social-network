import Post from "./Post/Post";

function PostsWall() {
    return (
        <div className="posts-wall">
            <Post message={'первое сообщение'}/>
            <Post message={'второе сообщение'}/>
            <Post message={'третье сообщение'}/>
            <Post/>
            <Post/>
        </div>
    );
}

export default PostsWall;