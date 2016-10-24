import React, {Component as C} from 'react'


class showAudio extends C {
  render(){
    return(
      <div className="container">
        <div>Category: {this.props.selectCategory}</div>
        <div>Title: {this.props.selectTitle}</div>
      </div>
    )
  }
}

export default showAudio;
