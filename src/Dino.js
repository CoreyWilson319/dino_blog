import React, { Component } from 'react';

class Dino extends Component {
    constructor() {
        super() 
        this.state = {
            title: "Dinos are awesome",
            author: "Stealthy Stegosaurus",
            body: "",
            comments: "First",
            edit: ""
        }
    }

    changeBody = (evt) => {
        this.setState({body: String(this.state.edit)})
        console.log(this.edit)
    }

    editThing = (evt) => {
        this.setState({
            edit: String(evt.target.value)
        })
    }
    render() {

        return (
            <div>
                <h1>Title: {this.props.title} </h1>
                <h1>Author: {this.props.author}</h1>
                <h1>Body: {this.state.body}</h1>
                <input value={this.state.edit} onChange={this.editThing}/>
                <button onClick={this.changeBody}>Submit</button>
                <h1>Comments: {this.props.comments[0]}</h1>
            </div>
        )
    }
}

export default Dino;