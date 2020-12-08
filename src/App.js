import './App.css';
import Title from './Title'
import Author from './Author'
import Body from './Body'
import Comments from './Comments'
import Posts from './Posts'

function App(props) {

  // const comments = ["First", "Great Post", "Hire this author now!"]
  // const displayComments = comments.map((eachComment, idx) => {
  //   return <Comments comment={eachComment} />
// })

  return (
    <div className="App">
      {/* <Title title="Dinosaurs are awesome" />
      <Author author="Stealthy Stegosaurus" />
      <Body body="Check out this body property!" />
      {displayComments} */}
      <Posts title={post.title} author={post.author} body={post.body} comments={post.comments[0]}/>
    </div>
  );
}

export default App;
