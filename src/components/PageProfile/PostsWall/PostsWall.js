import Post from "../Post/Post";

function PostsWall({posts}) {

    return (
        <div className="posts-wall">
            {posts.map(({message}, id) => <Post key={`m-${id}`} message={message}/>)}
        </div>
    );
}

export default PostsWall;