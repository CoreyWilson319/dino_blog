function Posts(prop) {
    return (
        <div>
            <h1>{prop.title}</h1>
            <h2>{prop.author}</h2>
            <h3>{prop.body}</h3>
            <h1>{prop.comments}</h1>
        </div>
    );
}

export default Posts;