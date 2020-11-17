import React from "react";



class DogCard extends React.Component {
  constructor() {
    super()
    this.state ={
      show: false
    }
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
  return (
    <div className="card">
      <span className="content">
        <h2 >{this.props.dog.name}</h2>
        <img alt={this.props.dog.name} src={this.props.dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.handleClick}>Bark</button>
        <h2 style={{display: this.state.show ? 'block' : 'none'}}>Bark</h2>
      </span>
    </div>
  )
  };
}

export default DogCard;
