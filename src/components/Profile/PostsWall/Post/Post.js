function Post({message}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <img src={'https://img.freepik.com/premium-photo/a-fat-cat-unhappy-with-his-life_193437-3712.jpg'} alt={''}/>
            </div>
            <div className="post__message">{message ?? "базовый текст"}</div>
        </div>
    );
}

export default Post;