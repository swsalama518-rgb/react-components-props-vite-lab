function Article(props) {
    return (
        <article>
        <h3>{props.title}</h3>
        <small>{props.date || "No date provided"}</small>
        <p>{props.preview}</p>
        </article>
    );
    }
export default Article;