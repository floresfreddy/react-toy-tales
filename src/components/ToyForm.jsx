import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: null,
    image: null
  }

  submitToy = (e) =>{
    e.preventDefault()
    this.props.create(this.state)
  }

  setName = e => this.setState({ name: e.target.value })

  setImage = e => this.setState({ image: e.target.value })


  render() {
    return (
      <div className="container">
        <form onSubmit={(e)=>this.submitToy(e)}className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.setName}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.setImage}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
